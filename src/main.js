let app = angular.module('meetling');
import UserController from './users/users.controller';
import WelcomeMessage from './users/users.directive';
import UsersService from './users/users.service';
import AuthenticationService from './services/authentication.service';
import Login from './login/login.controller';
import Register from './register/register.controller';
import config from './config/config';
import run from './config/run';

app.controller('Login', Login);
app.controller('Register', Register);
app.service('AuthenticationService', AuthenticationService);
app.service('UsersService', UsersService);
app.controller('UserController', UserController);
app.directive('welcome', WelcomeMessage);

app.config(config);
app.run(run);
