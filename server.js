var express    = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');

var shop = require('./routes/shop')
var donuts = require('./routes/donuts')
// var donut = require('./routes/donut')
// var shop_donut = require('./routes/shop_donut')
// var employee = require('./routes/employee')

app.use('/shops', shop);
app.use('/donuts', donuts);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(res.errors);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(res.errors);
});


module.exports = app;
