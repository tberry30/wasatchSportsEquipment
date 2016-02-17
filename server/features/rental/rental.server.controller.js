var Rental = require('./rental.server.model');

module.exports = {
  create: function(req, res) {
    var newRental = new Rental(req.body);

    newRental.save(function(err, rental) {
      if (err) res.send(err);
      else res.json(rental);
    });
  },

  read: function(req, res) {
    Rental.find({}, function(err, rentals) {
      if (err) res.send(err);
      else res.json(rentals);
    });
  },

  readOne: function(req, res) {
    Rental.findById(req.params.id).populate('repairs.createdBy').exec(function(err, rental) {
      if (err) res.send(err);
      else res.json(rental);
    });
  },

  update: function(req, res) {
    Rental.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, rental) {
      if (err) res.send(err);
      else res.json(rental);
    });
  },

  delete: function(req, res) {
    Rental.findByIdAndRemove(req.params.id, function(err, rental) {
      if (err) res.send(err);
      else res.json(rental);
    });
  },

  addRepair: function(req, res) {
    var repairObj = {};
    repairObj.type = req.body.repair.type;
    repairObj.notes = req.body.repair.notes;
    repairObj.createdBy = req.user.id;

    Rental.findByIdAndUpdate(req.params.id, { $push: {repairs: repairObj}, $inc: {timesRepaired: 1} }, function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    });
  },

  checkOut: function(req, res) {
    Rental.findByIdAndUpdate(req.params.id, {checkedOut: true, $inc: {timesRented: 1}}, function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    });
  },

  checkIn: function(req, res) {
    Rental.findByIdAndUpdate(req.params.id, {checkedOut: false}, function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    });
  }

};
