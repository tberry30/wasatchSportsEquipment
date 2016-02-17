var rentalCtrl = require('./rental.server.controller');

module.exports = function (app) {

  app.post('/api/rentals', rentalCtrl.create);
  app.post('/api/rentals/:id', rentalCtrl.addRepair);
  app.get('/api/rentals', rentalCtrl.read);
  app.get('/api/rentals/:id', rentalCtrl.readOne);
  app.put('/api/rentals/:id', rentalCtrl.update);
  app.put('/api/rentals/checkout/:id', rentalCtrl.checkOut);
  app.put('/api/rentals/checkin/:id', rentalCtrl.checkIn);

  app.delete('/api/rentals/:id', rentalCtrl.delete);

};
