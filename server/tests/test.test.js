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
  xit('get main page', function(done) {
    request(global.url)
    .get('/')
    .end(function(err, res) {
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
      console.info('BODY', res.body);
      res.status.should.equal(200);
      done();
    });
  });
});
