var _ = require('lodash');
var Basic = require('hapi-auth-basic');
var Bcrypt = require('bcrypt');

var users = [{
  id: 'u1',
  email: 'chris@chrismontrois.net',
  firstName: 'Chris',
  lastName: 'Montrois',
  password: '$2a$10$DyzqCRKnLLiPs9/8U15Y2u3ZCGlz49XaArsUA6ZWzWGm/iyPjnuK.'
}, {
  id: 'u2',
  email: 'mmontrois@gmail.com',
  firstName: 'Molly',
  lastName: 'Montrois',
  password: '$2a$10$DyzqCRKnLLiPs9/8U15Y2u3ZCGlz49XaArsUA6ZWzWGm/iyPjnuK.'
}];

function validate(username, password, callback) {
  var user = _.first(_.where(users, {email: username}));

  if (!user) {
    return callback(null, false);
  }

  Bcrypt.compare(password, user.password, function(err, isValid) {
    callback(err, isValid, user);
  });
}

function auth(server) {
  server.register(Basic, function(err) {
    server.auth.strategy('simple', 'basic', {validateFunc: validate});
  });
}

module.exports = auth;
