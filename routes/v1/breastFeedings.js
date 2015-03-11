var controller = require('../../controllers/breastFeeding');

module.exports = function(version, server) {
  var baseUrl = '/' + version + '/breastfeedings';

  // all
  server.route({
    config: {auth: 'simple'},
    handler: controller.all,
    method: 'GET',
    path: baseUrl
  });

  // create
  server.route({
    config: {auth: 'simple'},
    handler: controller.create,
    method: 'POST',
    path: baseUrl
  });

  // delete
  server.route({
    config: {auth: 'simple'},
    handler: controller.remove,
    method: 'DELETE',
    path: baseUrl + '/{id}'
  });

  // last
  server.route({
    config: {auth: 'simple'},
    handler: controller.last,
    method: 'GET',
    path: baseUrl + '/last'
  });
};
