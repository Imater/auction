// Node
import path from 'path';
import fs from 'fs';

// React
import React from 'react';
import { renderToString } from 'react-dom/server';

// Express
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Router
import { RoutingContext, match } from 'react-router';
//import Location from 'react-router/lib/Location';
import createLocation from 'history/lib/createLocation';
import routes from '../src/routes/appRoutes.jsx';
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


if (!isTest){
  process.env.BROWSER = false;
}
process.env.__DEVELOPMENT__ = !isProduction;

//app.use(morgan('dev'));
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
  var needEng = (req.get('host').indexOf('help') !== -1);
  if (req.cookies.lang && req.cookies.lang === 'eng'){
    if (!req.cookies.lang){
      res.cookie('lang', 'eng', { maxAge: 900000, httpOnly: false });
    }
    needEng = true;
  }
  const location = createLocation(req.url);
  match({routes, location}, (err, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (err) {
      res.send(500, err.message);
    } else if (renderProps == null) {
      res.send(404, 'Not found');
    } else {
      api.getAllLots().then(function(lotsFromDb){
        const store = createAppStore({
          todos: new List(lotsFromDb),
          i18: {
            language: needEng ? 'eng' : 'ru'
          }
        });

        const initialView = renderToString(
          <Provider store={store}>
          {() => <RoutingContext {...renderProps} />}
          </Provider>
        );

        var state = store.getState();
        const initialState = JSON.stringify(state);
        const langJson = JSON.stringify({language: needEng ? 'eng' : 'ru'});
        let resultHtml = indexHtml
        .replace('${initialView}', initialView)
        .replace('${language}', langJson)
        .replace('${initialState}', initialState);
        res.end(resultHtml);
      }).catch((error)=>{
        console.error(error.stack);
      });
    }
  });
});

app.get('*', function(req, res) {
  res.send('404 - Page Not Found');
});

export default app;
