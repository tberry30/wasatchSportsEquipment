var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../../features/user/user.server.model');

module.exports = function() {

  // LOCAL LOGIN =========================================================================
  passport.use('local-login', new LocalStrategy({
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true
  },
  function(req, username, password, done) {
      User.findOne({ 'username' : username }, function(err, user) {
          if (err)
              return done(err);
          if (!user)
              return done(null, false, req.flash('loginMessage', 'No user found.'));
          if (!user.validPassword(password))
              return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
          return done(null, user);
      });
  }));


  // LOCAL SIGNUP ========================================================================
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    process.nextTick(function () {
      User.findOne({ 'username': username }, function(err, user) {
        if (err)
          return done(err);
        if (user)
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        else {
          var newUser = new User();
          newUser.firstName = req.body.firstName;
          newUser.lastName = req.body.lastName;
          newUser.username = username;
          newUser.password = newUser.generateHash(password);
          newUser.email = req.body.email;
          newUser.isAdmin = req.body.isAdmin;

          newUser.save(function(err) {
            if (err)
              return done(err);
            else
              return done(null, newUser);
          });
        }
      });
    });
  }));

};
