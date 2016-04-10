var server = require('./lib/server');
var router = require('./lib/router');
var controller = require('./lib/controller');

var handle = {};
handle['/'] = controller.start;
handle['/start'] = controller.start;
handle['/upload'] = controller.upload;


server.startServer(4000, router.route, handle);