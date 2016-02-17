var User = require('./user.server.model');

module.exports = {

	// create user handled in local.js

  read: function(req, res) {
    User.find({}, function(err, users) {
      if (err) res.send(err);
      else res.json(users);
    });
  },

  readOne: function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err) res.send(err);
      else res.json(user);
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, user) {
      if (err) res.send(err);
      else res.json(user);
    });
  },

  delete: function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, user) {
      if (err) res.send(err);
      else res.json(user);
    });
  }

};
