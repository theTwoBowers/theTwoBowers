var Models = require('./models');
var Comment = Models.Comment;
var User = Models.User;

module.exports = {
  comment: {
    get: function(req, res) {
      Comment.find().then(function(resp) {
        res.json(resp);
      });
    },
    post: function(req, res) {
      var params = {
        userName: req.body.userName,
        comment: req.body.comment
      };
      Comment.create(params).then(function(resp) {
        res.sendStatus(201);
      });
    }
  },

  user: {
    getUser: function(req, res) {
      console.log(req.query);
      User.find(req.query).then(function(resp) {
        res.json(resp);
      });
    },

    createUser: function(req, res) {
      User.create(req.body).then(function(resp) {
        console.log(resp);
        res.sendStatus(201);
      });
    }
  }
};