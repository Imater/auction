import async from 'async';
import db from '../models';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';


var api = {};

const addInfoToItem = function(item){
  if (item && item.bids && item.bids.length){
    item.name = item.bids[0].bidUser;
    item.lastPrice = item.bids[0].price;
    item.lastTime = item.bids[0].createdAt;
  }
  return item;
};

const addInfoToItems = function(items){
  return items.map((item)=>{
    return addInfoToItem(item.toJSON ? item.toJSON() : item);
  });
};

api.getAllLots = function(id){
  return new Promise((request, reject) => {
    db.models.lot.findAll({
      where: {
        visible: 1
      },
      include: [{
        model: db.models.bid,
        attributes: [
          'id',
          'userId',
          'price',
          'createdAt'
        ],
        where: {
          visible: 1,
          userId: {
            $ne: null
          }
        },
        required: false,
        include: [{
          model: db.models.user,
          as: 'bidUser',
          attributes: [
            'firstname',
            'lastname',
            'middlename'
          ],
          required: false
        }]
      }, {
        model: db.models.lotphoto
      }],
      order: [[{model: db.models.bid}, 'createdAt', 'DESC']]
    }).then(function(lotsFromDb){
      request(addInfoToItems(lotsFromDb));
    }).catch(function(err){
      console.error(err);
    });
  });
};

api.getLotById = function(id){
  return new Promise((request, reject) => {
    db.models.lot.findOne({
      where: {
        id: id,
        visible: 1
      },
      include: [{
        model: db.models.bid,
        attributes: [
          'id',
          'userId',
          'price',
          'createdAt'
        ],
        where: {
          visible: 1,
          userId: {
            $ne: null
          }
        },
        required: false,
        include: [{
          model: db.models.user,
          as: 'bidUser',
          attributes: [
            'firstname',
            'lastname',
            'middlename'
          ],
          required: false
        }]
      }, {
        model: db.models.lotphoto
      }],
      order: [[{model: db.models.bid}, 'createdAt', 'DESC']]
    }).then(function(lotsFromDb){
      request(addInfoToItem(lotsFromDb.toJSON()));
    }).catch(function(err){
      console.error(err);
    });
  });
};

api.saveBid = function(body){
  return new Promise((request, reject) => {
    api.getLotById(body.lotId).then(
      function(oldLot){
        var oldPrice = oldLot.lastPrice;
        var askPrice = oldLot.askPrice;
        if(!oldPrice || askPrice > oldPrice){
          oldPrice = askPrice;
        }
        var newPrice = parseInt(body.price);
        if (oldPrice*1.09 > newPrice){
          return reject({
            error: 'price_too_low',
            oldPrice: oldPrice
          });
        }
        if (isNaN(newPrice)){
          return reject({
            error: 'price_bad',
            oldPrice: oldPrice
          });
        }
        if (oldPrice*10000000 < newPrice){
          return reject({
            error: 'price_too_high',
            oldPrice: oldPrice
          });
        }
        db.models.bid.create({
          userId: body.userId,
          lotId: body.lotId,
          price: body.price
        }).then(function(bid){
          api.getLotById(body.lotId).then(
            function(res){
              request(res);
            }
          );
        }).catch(function(err){
          console.error(err);
        });
      }
    );
  });
};

api.createUser = function(body, withoutEmail){
  return new Promise((request, reject) => {
    console.info('GOI');
    db.models.user.create(body).then(function(user){
      if(!withoutEmail){
        api.sendMail(user.toJSON(), function(err, info){
          console.info(err, info);
        });
      }
      request(user.toJSON());
    }).catch(function(err){
      console.error(err);
      reject(err);
    });
  });
};

api.restorePassword = function(body){
  return new Promise((request, reject) => {
    db.models.user.findOne({
      where: {
        email: body.email,
        visible: 1
      }
    }).then(function(user){
      api.sendMail(user.toJSON(), function(err, info){
        console.info(err, info);
      });
      request(user);
    }).catch(function(err){
      console.error(err);
    });
  });
};


api.userInfo = function(body){
  return new Promise((request, reject) => {
    db.models.user.findOne({
      where: {
        email: body.email,
        password: body.password,
        visible: 1
      }
    }).then(function(user){
      request(user);
    }).catch(function(err){
      console.error(err);
    });
  });
};


api.sendMail = function(body, cbEmail = ()=>{}) {
  var transporter;
  var from = 'helptoprotect@ya.ru';
  if(false){
    transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'goblind.outbox@gmail.com',
        pass: 'See6thoh'
      }
    });
    from = 'info@helptoprotect.ru';
  } else if (false) {
    transporter = nodemailer.createTransport();
    from = 'info@helptoprotect.ru';
  } else if (false){
    transporter = nodemailer.createTransport({
      service: 'Yandex',
      auth: {
        user: 'helptoprotect@ya.ru',
        pass: 'See990990you'
      }
    });
  } else if (true){
    var from = 'info@helptoprotect.ru';
    var options = {
      host: 'mail.helptoprotect.ru',
      ignoreTLS: true,
      port: 25,
      auth: {
        user: 'info@helptoprotect.ru ',
        pass: 'pass123'
      }
    };
    transporter = nodemailer.createTransport(smtpTransport(options));
  }
  transporter.sendMail({
    from: from,
    to: body.email,
    subject: 'Your account info for helptoprotect.ru',
    text: 'http://helptoprotect.ru\nEmail: '+body.email+' \nPassword: '+body.password
  }, function(err, info) {
    cbEmail(err, info);
  });
};

api.soldBid = function(body){
  return new Promise((request, reject) => {
    console.info('SOLD BID');
    db.models.lot.findOne({
      where: {
        id: body.lotId
      }
    }).then(
      function(oldLot){
        var status = 'sold';
        if (oldLot.status === 'sold'){
          status = 'active';
        }
        oldLot.updateAttributes({
          status: status
        }).then(function(){
          api.getLotById(body.lotId).then(
            function(res){
              request(res);
            }
          );
        }).catch(function(err){
          reject(err);
        });
      }
    );
  });
};

export default api;

