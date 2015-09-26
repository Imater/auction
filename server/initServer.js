import app from './server.js';
import config from './config';

const PORT = process.env.PORT || config.server.port || 3000;

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
  console.info('exit');
  server.close();
});
process.on('SIGTERM', ()=> {
  console.info('sigterm');
  server.close();
});
