var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var CommentSchema = new mongoose.Schema({
  userName: String,
  comment: String
});

var UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  lastLocation: String,
  playlists: Array
});

module.exports = {
  Comment: mongoose.model('Comment', CommentSchema),
  User: mongoose.model('User', UserSchema)
};