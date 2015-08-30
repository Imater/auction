import server from './server/server.js';

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
    console.log('Server listening on', PORT);
});

process.on('exit', ()=> {
  console.info('close1');
  server.close();
});
process.on('SIGTERM', ()=> {
  console.info('close3');
  server.close();
});
