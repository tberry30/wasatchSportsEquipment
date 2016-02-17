var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose
    .connect(config.db)
    .connection.once('open', function() {
      console.log('Connected to Mongo at ' + config.db);
    });

  require('../features/user/user.server.model');

  return db;
};
