import async from 'async';
import db from '../models';

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
      include: [{
        model: db.models.bid,
        attributes: [
          'id',
          'price',
          'createdAt'
        ],
        where: {
          visible: 1
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
      include: [{
        model: db.models.bid,
        attributes: [
          'id',
          'price',
          'createdAt'
        ],
        where: {
          visible: 1
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
    db.models.bid.create({
      userId: body.userId,
      lotId: body.lotId,
      price: body.price
    }).then(function(bid){
      api.getLotById(bid.id).then(
        function(res){
          request(res);
        }
      );
    }).catch(function(err){
      console.error(err);
    });
  });
};

export default api;

