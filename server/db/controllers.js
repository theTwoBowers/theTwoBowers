var Models = require('./models');
var Comment = Models.Comment;
var User = Models.User;

module.exports = {
  commentController: {
    get: function(req, res) {
      Comment.find().then(function(resp) {
        res.json(resp);
      });
    }    
  }
};