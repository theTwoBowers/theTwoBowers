var Models = require('./models');
var mongoose = require('mongoose');
var Comment = Models.Comment;

mongoose.connect('mongodb://localhost/twoBowers');
var db = mongoose.connection;

var dummyComment = [
  {
    userName: 'Jonathan S.',
    text: 'this site is pretty cool guys!'
  },
  {
    userName: 'Edmund L.',
    text: 'this site is the best!'
  },
  {
    userName: 'Scott C.',
    text: 'this site sux, 1v1 me bro'
  }
];

var seedDB = function() {
  for (var i = 0; i < dummyComment.length; i++) {
    Comment.create(dummyComment[i]).then(function(resp) {
      console.log(resp);
    });   
  }
};

// seedDB();