//TODO: mongodb schemas
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/twoBowers');

//modularize the schema out later
var db = mongoose.connection;

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    userName: String,
    timeStamp: String,
    comment: String
  }
);

var commentModel = mongoose.model('comment', commentSchema);

exports.model = commentModel;
exports.db = db;