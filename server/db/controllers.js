var Models = require('./models');
var Comment = Models.Comment;
var User = Models.User;
var request = require('request');

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
      var val = req.body.value;
      User.findByIdAndUpdate(req.body._id, { 
        [req.body.method]: { [req.body.property]: val }
      }).then(function(resp) {
        res.json(resp);
      });
    }
  },

  lat: function(req, res) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + req.query.lat + '&lon=' + req.query.lon + '&appid=07a96fec5d332a2798fa83aba696d9f2';
    request(url, function(err, response, body) {
      if (err) { throw err; }
      res.send(response);
    });
  },
  city: function (req, res) {
    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + req.query.city + '&appid=07a96fec5d332a2798fa83aba696d9f2';
    request(url, function(err, response, body) {
      if (err) { throw err; }
      res.send(response);
    });
  }

};