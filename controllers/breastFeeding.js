var BreastFeedingSvc = require('../services/BreastFeedingSvc');

function all(req, reply) {
  var userId = req.auth.credentials.id;

  BreastFeedingSvc.all(userId, function(err, results) {
    reply(results);
  });
}

function create(req, reply) {
  var userId = req.auth.credentials.id;
  var data = req.payload;

  BreastFeedingSvc.create(userId, data, function(err, success) {
    reply(success);
  });
}

function last(req, reply) {
  var userId = req.auth.credentials.id;

  BreastFeedingSvc.last(userId, function(err, result) {
    reply(result);
  });
}

function remove(req, reply) {
  var userId = req.auth.credentials.id;
  var itemId = req.params.id;

  BreastFeedingSvc.remove(userId, itemId, function(err, success) {
    reply(success);
  });
}

module.exports = {
  all: all,
  create: create,
  remove: remove,
  last: last
};
