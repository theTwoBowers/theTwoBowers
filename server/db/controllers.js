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
        text: req.body.text
      };
      Comment.create(params).then(function(resp) {
        res.sendStatus(201);
      });
    }
  },

  user: {
    getUser: function(req, res) {
      User.find(req.query).then(function(resp) {
        res.json(resp);
      });
    },

    createUser: function(req, res) {
      User.create(req.body).then(function(resp) {
        res.sendStatus(201);
      });
    },

    updateUser: function(req, res) {
      User.findByIdAndUpdate(req.body._id, { 
        $set: { [req.body.property]: [req.body.value] }
      }).then(function(resp) {
        res.json(resp);
      });
    }
  }
};