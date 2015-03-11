var _ = require('lodash');
var config = require('config');
var Hapi = require('hapi');
var setupAuth = require('./utils/auth-simple');

var server = new Hapi.Server();
server.connection({port: config.server.port || 3000});
setupAuth(server);

var VERSIONS = {
  "Version 1": "v1"
};
_.forEach(VERSIONS, function(key) {
  require('./routes/' + key)(key, server);
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
