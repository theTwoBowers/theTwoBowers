var express = require('express');
var morgan = require('morgan'); // logs server interactions
var bodyParser = require('body-parser');
var app = express();
var dbModule = require('./db/index.js');
var controller = require('./controllers/index');

var model = dbModule.model;
var db = dbModule.db;

db.once('open', function() {
  console.log('Connected to MongoDB');
  var port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log('I am listening to port:', port);
  });  
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client'));

app.get('/api/getComments', controller.comments.get);
