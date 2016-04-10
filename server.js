'use strict';

var http = require('http');

exports.startServer = function (port) {

    http.createServer((req, res) => {

        console.log('request received.');

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.write('Hello World');
        res.end();

    }).listen(port);

    console.log('Server Started Success at Port', port, '!');
};

