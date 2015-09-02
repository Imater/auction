import app from './server/server.js';
import http from 'http';
import socketIo from './server/socketIo.js';

var server = http.createServer(app);
socketIo.init(server);

const PORT = process.env.PORT || 3000;


server.listen(PORT, function() {
    console.log('Server listening on', PORT);
});

process.on('exit', ()=> {
  server.close();
});
process.on('SIGTERM', ()=> {
  server.close();
});
