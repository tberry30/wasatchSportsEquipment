var mongoose = require('mongoose');

var RepairSchema = new mongoose.Schema({
	type: {
    type: String,
    enum: ['Repair', 'Tune', 'Test']
  },
  notes: { type: String },
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Repair', RepairSchema);
