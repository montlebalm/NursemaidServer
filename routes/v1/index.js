var breastFeedingRoutes = require('./breastFeedings');

module.exports = function(version, server) {
  breastFeedingRoutes(version, server);
};
