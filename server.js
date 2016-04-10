'use strict';

var http = require('http');
var url = require('url');

exports.startServer = function (port) {

    var processRequest = (req, res) => {

        var pathname = url.parse(req.url).pathname;
        console.log("Request for", pathname, "received.");


        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.write('Hello World');
        res.end();
    };

    http.createServer(processRequest).listen(port);

    console.log('Server Started Success at Port', port, '!');
};

