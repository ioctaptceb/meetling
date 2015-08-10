var app = angular.module('meatlingApp');
var UserController = require('./controllers/users.controller');

app.service('User', require('./services/users.service'));
app.controller('UserController', UserController);

