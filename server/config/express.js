// DEPENDENCIES ==========================================================================
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport');
    session = require('express-session'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    flash = require('connect-flash'),
    moment = require('moment'),
    config = require('./config');

    moment().format();

module.exports = function() {
  var app = express();

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  // CONTROLLERS =========================================================================

  // MODDLEWARE ==========================================================================
  app.set('view engine', 'ejs');
  app.set('views', '../views');

  var corsOptions = { origin: 'http://localhost:2929' };
  app.use(cors(corsOptions));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
  }));

  app.use(flash());

  app.use(passport.initialize());
  app.use(passport.session());

  // ROUTES ==============================================================================
	require('../features/auth/auth.server.routes.js')(app);
  require('../features/user/user.server.routes.js')(app);
  require('../features/rental/rental.server.routes.js')(app);

  // STATIC FILES AND ROUTE CATCH ALL ====================================================
  app.use(express.static('./public'));

  return app;
};
