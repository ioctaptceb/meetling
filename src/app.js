import angular from 'angular';
import ngCookies from 'angular-cookies';
import config from './config/config';
import run from './config/run';

let app = angular.module('meetling', ['ngCookies']);


app.config(config);
app.run(run);

require('./main.js');

