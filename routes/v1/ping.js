module.exports = function(version, server) {
  var baseUrl = '/' + version + '/ping';

  server.route({
    handler: function(req, reply) {
      reply('pong');
    },
    method: 'GET',
    path: baseUrl
  });
};
