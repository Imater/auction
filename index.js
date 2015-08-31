import app from './server/server.js';

const PORT = process.env.PORT || 3000;

var server = app.listen(PORT, function() {
    console.log('Server listening on', PORT);
});

process.on('exit', ()=> {
  server.close();
});
process.on('SIGTERM', ()=> {
  server.close();
});
