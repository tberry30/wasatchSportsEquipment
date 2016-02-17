var repairCtrl = require('./repair.server.controller');

module.exports = function (app) {

  app.post('/api/repairs', repairCtrl.create);

};
