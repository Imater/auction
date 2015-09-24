'use strict';
module.exports = {
    root: __dirname+'/../../build',
    log: {
        allFileName: 'all-test.log'
    },
    server: {
        port: 3001,
        address: '127.0.0.1'
    },
    amqp: {
        connection: {
            vhost: '/goblind-test',
            reconnect: false
        }
    },
    db: {
        name: 'auction'
    }
};
