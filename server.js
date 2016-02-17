process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./server/config/mongoose'),
    express = require('./server/config/express'),
    passport = require('./server/config/passport');

var db = mongoose(),
    app = express(),
    passport = passport();

var port = process.env.PORT || 2929;

app.listen(port, function() {
	console.log('Server running at http://localhost:' + port + '/');
});
