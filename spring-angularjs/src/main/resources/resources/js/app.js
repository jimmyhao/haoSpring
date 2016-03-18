'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ngAnimate', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }]).
  config(['$httpProvider', function($httpProvider) {
    // Accept: application/jsonを見れば代替可能
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  }]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pages/', {templateUrl: 'partials/index.html'});
    $routeProvider.when('/pages/page1', {templateUrl: 'partials/page1.html'});
    $routeProvider.when('/pages/page2', {templateUrl: 'partials/dir1/page2.html'});
    $routeProvider.when('/pages/dir/page3', {templateUrl: 'partials/dir1/dir2/page3.html'});
    $routeProvider.otherwise({redirectTo: 'pages/'});
  }]);
