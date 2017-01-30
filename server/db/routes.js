var express = require('express');
var controller = require('./controllers');
var route = express.Router();

var commentController = controller.comment;
var userController = controller.user;

route.get('/comments', commentController.get);
route.post('/comments', commentController.post);

route.get('/users', userController.getUser);
route.post('/users', userController.createUser);
route.put('/users', userController.updateUser);

route.get('/lat', controller.lat);
route.get('/city', controller.city);

module.exports = route;