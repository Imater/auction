import { Router } from 'express';
import api from '../api';

const apiRoutes = Router();

apiRoutes.get('/', (req, res) => {
  res.end('Welcome to api routes');
});

apiRoutes.get('/hello', (req, res) => {
  res.end('hello');
});

apiRoutes.post('/bid', (req, res) => {
  api.saveBid(req.body).then(function(result){
    res.status(200).send(result);
  }).catch(function(err){
    res.status(400).send(err);
  });
});

export default apiRoutes;
