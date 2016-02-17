var config = require('../../config/config'),
    passport = require('passport');

module.exports = function (app) {

  var auth = function(req, res, next) {
    if (!req.isAuthenticated()) res.send(401);
    else next();
  };

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/#/equipment',
    failureRedirect : '/#/login'
  }));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/#/equipment',
    failureRedirect: '/#/signup'
  }));

  app.get('/loggedin', function(req, res) {
    if (req.isAuthenticated) res.send(req.user);
    else res.send({user:'invalid'});
  });

  // app.get('/profile', isLoggedIn, function(req, res) {
  //   res.redirect('/#/profile');
  // });

  app.get('/profile', auth, function(req, res) {
    res.redirect('/#/profile');
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.sendStatus(200);
  });

  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated()) return next();
  //   return res.redirect('/#/login');
  // }

};
