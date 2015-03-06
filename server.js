var config = require('config');
var Hapi = require('hapi');
var setupAuth = require('./utils/auth-simple');
var setupRoutes = require('./routes');

var server = new Hapi.Server();
server.connection({port: config.server.port || 3000});

setupAuth(server);
setupRoutes(server);

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
