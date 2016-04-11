'use strict';

var exec = require('child_process').exec;

exports.start = function (res) {
    console.log("ctrl::start()");
    
    exec("ls -lah", function (err, stdout, stderr) {
        
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(stdout);
        res.end();
    });

};

exports.upload = function (res) {
    console.log("ctrl::upload()");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello Upload");
    res.end();
};
