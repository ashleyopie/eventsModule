'use strict';

angular.module('eventsAppApp')
    .controller('EventviewCtrl', function($scope, $routeParams, singleevent) {
        //console.log($routeParams.eventId);
        singleevent.events($routeParams.eventId).success(function(data, status, headers) {
            $scope.events = data;
            console.log(data);
        });
    });