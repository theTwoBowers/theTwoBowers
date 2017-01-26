var express = require('express');
var morgan = require('morgan'); // logs server interactions
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var controller = require('./db/controllers'); //<-- this should go into routing

mongoose.connect('mongodb://localhost/twoBowers');
var db = mongoose.connection;

var commentController = controller.comment; //<-- to routing
var userController = controller.user;

var app = express();

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

app.get('/api/comments', commentController.get); //<-- also should go to routing
app.post('/api/comments', commentController.post);

app.get('/api/users', userController.getUsers);
