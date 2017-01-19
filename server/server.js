var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
//TODO: connect to database;

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '../client'));



//TODO: server routing;







app.listen(port);

console.log('I am listening to port:', port);