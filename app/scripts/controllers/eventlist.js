'use strict';

angular.module('eventsAppApp')
    .controller('EventsListController', function($scope, pdAPItest) {

    $scope.$watch('search', function() {
            pdAPItest.events().success(function(data, status, headers) {
                $scope.events = data.events;
                console.log(data.events);
            });
        });
    });