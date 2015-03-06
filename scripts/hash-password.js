var bcrypt = require('bcrypt');

module.exports = function(password) {
  return bcrypt.hashSync(password.toString(), 10);
};
