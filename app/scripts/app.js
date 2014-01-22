'use strict';

angular.module('eventsAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main',
                controller: 'MainCtrl'
            })
            .when('/events/:eventId', {
                templateUrl: 'views/partials/eventview.html',
                controller: 'EventviewCtrl'
            })
            .when('/search', {
                templateUrl: 'views/partials/search.html',
                controller: 'AdvsearchCtrl'
            })
            .when('/bestbets', {
                templateUrl: 'views/partials/bestbets.html',
                controller: 'BestbetscontrollerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true);
    });