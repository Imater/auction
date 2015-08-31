'use strict';

var initServer = require('../initServer.js');
var config = require('../config');

before(function (done) {
  this.timeout(25000);
  global.url = ([
    'http://',
    config.server.address,
    ':',
    config.server.port,
    '/'
  ].join(''));
  //global.url = 'http://kc.looi.ru/';
  //global.url = 'http://gb.looi.ru/';
  //global.url = 'http://localhost:5000/';
  initServer.startServer(function(){
    return done();
  });
});

after(function (done) {
  initServer.closeServer(function(){
    return done();
  });
});
