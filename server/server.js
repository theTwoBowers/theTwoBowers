var express = require('express');
var morgan = require('morgan'); // logs server interactions
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./db/routes');


mongoose.connect('mongodb://heroku_tfpq2psd:igte9e9qas64bup68jli7rdtj4@ds137729.mlab.com:37729/heroku_tfpq2psd');

var db = mongoose.connection;

var app = express();

db.once('open', function() {
  console.log('Connected to MongoDB');

  var port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log('I am listening to port:', port);
    console.log('keys: ', process.env.YOUTUBE_KEY, process.env.OWM_KEY);
  });
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client'));
app.use('/api', routes);
