import app from './server.js';

const PORT = process.env.PORT || 3000;

var server = {};

export default {
  startServer: function(done){
    server = app.listen(PORT, function() {
      console.log('Server listening on', PORT);
      done();
    });
  },
  closeServer: function(done){
    server.close();
    return done();
  }
};

process.on('exit', ()=> {
  server.close();
});
process.on('SIGTERM', ()=> {
  server.close();
});
