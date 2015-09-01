import sock from 'socket.io';

var socketIo = {
  io: {}
};

socketIo.init = function (server){
  socketIo.io = sock.listen(server);

  socketIo.io.sockets.on('connection', function(socket){
    console.info('SOCKET CONNECTED');
    //socketIo.io.emit('refresh', {hello: '1'});
  });
};

export default socketIo;
