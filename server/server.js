// Node
import path from 'path';
import fs from 'fs';

// React
import React from 'react';

// Express
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Router
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import appRoutes from '../src/routes/appRoutes.jsx';
import apiRoutes from './apiRoutes/apiRoutes.js';

// Webpack
import httpProxy from 'http-proxy';
import webpackDevServer from './webpackDevServer.js';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { List } from 'immutable';
import * as reducers from '../src/stores';
import createAppStore from '../src/createStore/createStore';
import api from './api';


const proxy = httpProxy.createProxyServer();
const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const app = express();
console.info('NODE_ENV', process.env.NODE_ENV);


if(!isTest){
  process.env.BROWSER = false;
}
process.env.__DEVELOPMENT__ = !isProduction;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'uploads')));
app.use('/locales', express.static(path.join(__dirname, '..', 'assets', 'locales')));
app.use('/favicon.ico', express.static(path.join(__dirname, '..', 'assets', 'images', 'favicon.ico')));

const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'assets', 'index.html'), { encoding: 'utf-8' });

app.use('/api', apiRoutes);

if (!isProduction && !isTest) {
  webpackDevServer();
  app.all('/build/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8085'
    });
  });
} else {
  console.info('PRODUCTION MODE');
  app.use('/build', express.static(path.join(__dirname, '..', 'dist')));
}

app.use((req, res, next) => {
  const location = new Location(req.path, req.query);

  Router.run(appRoutes, location, (err, routeState) => {
    if (!routeState) {
      return next();
    }
    api.getAllLots().then(function(lotsFromDb){
      const store = createAppStore({
        todos: new List(lotsFromDb),
        i18: {
          language: req.cookies.lang || 'ru'
        }
      });
      const initialView = React.renderToString(
        <Provider store={store}>
        {() => <Router {...routeState} />}
        </Provider>
      );
      var state = store.getState();
      const initialState = JSON.stringify(state);
      let resultHtml = indexHtml
      .replace('${initialView}', initialView)
      .replace('${initialState}', initialState);
      res.end(resultHtml);
    });
  });
});

app.get('*', function(req, res) {
  res.send('404 - Page Not Found');
});

export default app;
