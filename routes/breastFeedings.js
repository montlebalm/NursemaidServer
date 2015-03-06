var controller = require('../controllers/breastFeeding');

var PREFIX = '/breastfeedings';

module.exports = function(server) {
  // all
  server.route({
    config: {auth: 'simple'},
    handler: controller.all,
    method: 'GET',
    path: PREFIX
  });

  // create
  server.route({
    config: {auth: 'simple'},
    handler: controller.create,
    method: 'POST',
    path: PREFIX
  });

  // delete
  server.route({
    config: {auth: 'simple'},
    handler: controller.remove,
    method: 'DELETE',
    path: PREFIX + '/{id}'
  });

  // last
  server.route({
    config: {auth: 'simple'},
    handler: controller.last,
    method: 'GET',
    path: PREFIX + '/last'
  });
};
