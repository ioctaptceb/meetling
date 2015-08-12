let app = angular.module('meetling');
import UserController from './users/users.controller';
import WelcomeMessage from './users/users.directive';
import UsersService from './users/users.service';

app.service('UsersService', UsersService);
app.controller('UserController', UserController);
app.directive('welcome', WelcomeMessage);
