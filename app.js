
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mobconf = require('./routes/mobileconfig')
  , http = require('http')
  , path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(function(req, res, next) {
    var data = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        data += chunk;
    });
    req.on('end', function() {
        req.rawBody = data;
        next();
    });
});
app.use(bodyParser);
app.use(cookieParser('To3mKG80i9'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

app.post('/enroll', mobconf.enroll);
app.get('/enrollment', mobconf.enrollment);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
