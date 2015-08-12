let app = angular.module('meatlingApp');
import UserController from './controllers/users.controller';
import WelcomeMessage from './directives/users.directive';
import UsersService from './services/users.service';

app.service('UsersService', UsersService);
app.controller('UserController', UserController);
app.directive('welcome', WelcomeMessage);
