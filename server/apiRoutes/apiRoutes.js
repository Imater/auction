import { Router } from 'express';
import api from '../api';
import socketIo from '../socketIo.js';

const apiRoutes = Router();

apiRoutes.get('/', (req, res) => {
  res.end('Welcome to api routes');
});

apiRoutes.get('/hello', (req, res) => {
  res.end('hello');
});

apiRoutes.post('/bid', (req, res) => {
  api.saveBid(req.body).then(function(result){
    console.info('socket refresh');
    socketIo.io.emit('refresh', result);
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.put('/bid/sold', (req, res) => {
  api.soldBid(req.body).then(function(result){
    console.info('socket refresh');
    socketIo.io.emit('refresh', result);
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.put('/bid', (req, res) => {
  api.createUser({
    lastname: req.body.lastname,
    visible: 1
  }, true).then(function(user){
    console.info(user);
    api.saveBid({
      userId: user.id,
      lotId: req.body.lotId,
      price: req.body.price
    }).then(function(result){
      console.info('socket refresh', result);
      socketIo.io.emit('refresh', result);
      res.status(200).send(result);
    }).catch(function(err){
      res.status(400).send(err);
    });
  });
});

apiRoutes.get('/bid', (req, res) => {
  console.info('get bid');
  api.getLotById(2).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.post('/user', (req, res) => {
  api.createUser(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.put('/user', (req, res) => {
  api.userInfo(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

apiRoutes.put('/user/email', (req, res) => {
  api.restorePassword(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

export default apiRoutes;
