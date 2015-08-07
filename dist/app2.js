'use strict';

var angular = require('angular');

var meatling = angular.module('meatlingApp', []);

meatling.controller('UsersListCtrl', function ($scope) {
  $scope.users = [{ 'name': 'yasaman',
    'timezone': 'PST' }, { 'name': 'yulia',
    'timezone': 'CEST' }, { 'name': 'aviv',
    'timezone': 'ADT' }, { 'name': 'nashwa',
    'timezone': 'EST' }];
});

console.log('hello', angular);
'use strict';

console.log('foo');