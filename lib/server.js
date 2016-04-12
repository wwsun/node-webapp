'use strict';

var http = require('http');
var url = require('url');

exports.startServer = function (port, route, handle) {

  var processRequest = (req, res) => {

    var postData = " ";
    var pathname = url.parse(req.url).pathname;
    console.log("Request for", pathname, "received.");

    req.setEncoding('utf8');

    req.addListener('data', chunk => {
      postData += chunk;
      console.log('Received POST data chunk', chunk, '.');
    });

    req.addListener('end', () => {
      route(handle, pathname, res, postData);
    });

    // pass res back to router
    // route(handle, pathname, res);

    // res.writeHead(200, {
    //     "Content-Type": "text/plain"
    // });
    //
    // res.write(content);
    // res.end();
  };

  http.createServer(processRequest).listen(port);

  console.log('Server Started Success at Port', port, '!');
};

