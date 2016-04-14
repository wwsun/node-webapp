'use strict';

// var exec = require('child_process').exec;
var fs = require('fs');
var querystring = require('querystring');
var formidable = require("formidable");

exports.start = function (res) {

  console.log("ctrl::upload()");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input name="upload" type="file" />' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>';

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(body);
  res.end();

};

exports.upload = function (res, req) {
  console.log('Request handler [upload] was called.');
  
  var form = new formidable.IncomingForm();
  console.log("about to parse");
  
  form.parse(req, (err, fields, files) => {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "/tmp/test.png");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("received image: <br/>");
    res.write("<img src='/show' ");
    res.end();
  });
  
  
  // res.writeHead(200, {"Content-Type": "text/plain"});
  // res.write("You've sent the text: " + querystring.parse(postData).text);
  // res.end();
};

exports.show = function (res, postData) {
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/test.png", "binary", (err, file) => {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.write(err + "\n");
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "image/png"});
      res.write(file, "binary");
      res.end();
    }
    
    
  })
};
