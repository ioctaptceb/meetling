import angular from 'angular';

let login = angular.module('meetling.login', []);
let slabs = angular.module('meetling.slabs', []);
let cuttingBoard = angular.module('meetling.cuttingboard', ['meetling.slabs', 'meetling.login']);
let meetling = angular.module('meetling', ['meetling.slabs', 'meetling.cuttingboard', 'meetling.login']);

import './main.js';
