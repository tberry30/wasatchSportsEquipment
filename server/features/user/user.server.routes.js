var userCtrl = require('./user.server.controller');

module.exports = function (app) {

  // post user handled in local.js

  //app.get('/api/users', userCtrl.read);
  app.get('/api/users/:id', userCtrl.readOne);
  app.put('/api/users/:id', userCtrl.update);
  app.delete('/api/users/:id', userCtrl.delete);

};
