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
  it('get main page', function(done) {
    request(global.url)
    .get('/')
    .end(function(err, res) {
      res.status.should.equal(200);
      done();
    });
  });
});
