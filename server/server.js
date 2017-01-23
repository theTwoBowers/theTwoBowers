var express = require('express');
var morgan = require('morgan'); // logs server interactions
var bodyParser = require('body-parser');
//TODO: connect to database;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/twoBowers');

var db = mongoose.connection;
db.once('open', function() {
  console.log('Connected to MongoDB')
})

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client'));
console.log(__dirname)

//TODO: server routing;


app.listen(port);

console.log('I am listening to port:', port);
//something happened