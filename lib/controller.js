'use strict';

// var exec = require('child_process').exec;
var querystring = require('querystring');

exports.start = function (res, postData) {

  console.log("ctrl::upload()");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(body);
  res.end();

  // console.log("ctrl::start()");
  //
  // exec("ls -lah", function (err, stdout, stderr) {
  //
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.write(stdout);
  //   res.end();
  // });

};

exports.upload = function (res, postData) {
  console.log('Request handler [upload] was called.');
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("You've sent the text: " + querystring.parse(postData).text);
  res.end();
};
