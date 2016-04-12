'use strict';

var exec = require('child_process').exec;

exports.start = function (res) {
  console.log("ctrl::start()");

  exec("ls -lah", function (err, stdout, stderr) {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(stdout);
    res.end();
  });

};

exports.upload = function (res) {
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
};
