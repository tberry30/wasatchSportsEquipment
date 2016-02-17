var mongoose = require('mongoose');

var RentalSchema = new mongoose.Schema({
	ws_id: { type: String },
	type: {
    type: String,
    enum: ['Ski', 'Snowboard', 'Cross-Country', 'Snowshoe', 'Mountain Bike', 'Road Bike']
  },
  package: {
    type: String,
    enum: ['Sport', 'Performance', 'Demo']
  },
  season: { type: String },
  brand: { type: String },
  model: { type: String },
	size: { type: String },
	attributes: { type: String },
	repairs: [{
		type: { type: String },
		notes: { type: String },
		createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		createdDate: { type: Date, default: Date.now }
	}],
	timesRepaired: { type: Number, default: 0 },
	timesRented: { type: Number, default: 0 },
	checkedOut: { type: Boolean, default: false }
});

module.exports = mongoose.model('Rental', RentalSchema);
