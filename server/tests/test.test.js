require('should');
require('assert');
var request = require('supertest');

describe('Test', function() {
  it('server test', function(done) {
    request(global.url)
    .get('api')
    .end(function(err, res) {
      res.status.should.equal(200);
      done();
    });
  });
  it.only('get main page', function(done) {
    request(global.url)
    .get("lot/11")
    .end(function(err, res) {
      console.info(err);
      res.status.should.equal(200);
      done();
    });
  });
  it('post bid', function(done) {
    request(global.url)
    .post('api/bid')
    .send({
      userId: 1,
      lotId: 1,
      price: 100000
    })
    .end(function(err, res) {
      res.status.should.equal(200);
      done();
    });
  });
  it('create user', function(done) {
    request(global.url)
    .post('api/user')
    .send({
      email: 'eu@eu.ru',
      lastname: 'lastname',
      password: '123',
      userGroup: 1
    })
    .end(function(err, res) {
      console.info(err, res);
      res.status.should.equal(200);
      done();
    });
  });
  it('login user', function(done) {
    request(global.url)
    .put('api/user')
    .send({
      email: 'eu@eu.ru',
      password: '123'
    })
    .end(function(err, res) {
      console.info(err, res);
      res.status.should.equal(200);
      done();
    });
  });
  it('lot sold', function(done) {
    request(global.url)
    .put('api/bid')
    .send({
      userId: 1,
      lotId: 1,
      lastname: 'Участник №1',
      price: 200000
    })
    .end(function(err, res) {
      res.status.should.equal(200);
      done();
    });
  });
  it('get main page', function(done) {
    request(global.url)
    .get('api/bid')
    .end(function(err, res) {
      res.status.should.equal(200);
      done();
    });
  });
});
