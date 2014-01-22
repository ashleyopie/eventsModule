'use strict';

angular.module('eventsAppApp')
    .controller('BestbetssidebarCtrl', function($scope, pdAPItest) {
        $scope.$watch('search', function() {
            pdAPItest.bestBets().success(function(data, status, headers) {
                $scope.events = data.events;
                console.log(data.events);
            });
        });
    });