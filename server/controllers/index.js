var ModelModule = require('../db/index');
var Model = ModelModule.model;

module.exports = {
  comments: {
    get: function(req, res) {
      Model.find(function (err, comments) {
        if (err) {
          return console.error(err);
        } else {
          res.json(comments);
        }
      });
    }    
  }
};