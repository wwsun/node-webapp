'use strict';

var http = require('http');
var url = require('url');
// var util = require('util');
// var formidable = require('formidable');

exports.startServer = function (port, route, handle) {

  var processRequest = (req, res) => {

    // if (req.url === '/upload' && req.method.toLowerCase() == 'post') {
    //   // parse a file upload
    //   var form = new formidable.IncomingForm();
    //   form.parse(req, (err, fields, files) => {
    //
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     res.write('received upload: \n\n');
    //     res.end(util.inspect({fields: fields, file: files}));
    //
    //   });
    //   return;
    // }
    //
    // // show a file upload form
    // res.writeHead(200, {'content-type': 'text/html'});
    // res.end(
    //   '<form action="/upload" enctype="multipart/form-data" '+
    //   'method="post">'+
    //   '<input type="text" name="title"><br>'+
    //   '<input type="file" name="upload" multiple="multiple"><br>'+
    //   '<input type="submit" value="Upload">'+
    //   '</form>'
    // );

    // var postData = " ";
    var pathname = url.parse(req.url).pathname;
    console.log("Request for", pathname, "received.");
    route(handle, pathname, res, req);
    
    // req.setEncoding('utf8');

    // req.addListener('data', chunk => {
    //   postData += chunk;
    //   console.log('Received POST data chunk', chunk, '.');
    // });
    //
    // req.addListener('end', () => {
    //   route(handle, pathname, res, postData);
    // });

  //   // pass res back to router
  //   route(handle, pathname, res);
  //
  //   res.writeHead(200, {
  //       "Content-Type": "text/plain"
  //   });
  //
  //   res.write(content);
  //   res.end();
  };

  http.createServer(processRequest).listen(port);

  console.log('Server Started Success at Port', port, '!');
};

