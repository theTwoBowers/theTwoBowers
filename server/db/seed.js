var modelModule = require('./index.js');
var model = modelModule.model;
var db = modelModule.db;

db.collections['comments'].drop(function(err) {
  if (err) {
    console.log(err);
  }
});

var dummyComment = [{
  userName: 'Jonathan S.',
  timeStamp: new Date(),
  comment: 'this site is pretty cool guys!'
},
{
  userName: 'Edmund L.',
  timeStamp: new Date(),
  comment: 'this site is the best!'
},
{
  userName: 'Scott C.',
  timeStamp: new Date(),
  comment: 'this site sux, 1v1 me bro'
}
];

for (var i = 0; i < dummyComment.length; i++) {
  model.create(dummyComment[i], function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }    
  });   
} 
