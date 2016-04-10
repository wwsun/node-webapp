'use strict';

var http = require('http');

http.createServer((req, res) => {
    
    // console.log('req',req);
    // console.log('res',res);

    console.log('request received.');
    
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    
    res.write('Hello World');
    res.end();
    
}).listen(8888);

console.log('Server Started Success!');