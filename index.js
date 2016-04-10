var server = require('./lib/server');
var router = require('./lib/router');

server.startServer(4000, router.route);