var breastFeedingRoutes = require('./breastFeedings');
var pingRoutes = require('./ping');

module.exports = function(version, server) {
  breastFeedingRoutes(version, server);
  pingRoutes(version, server);
};
