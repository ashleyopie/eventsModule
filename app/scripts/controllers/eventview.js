'use strict';

angular.module('eventsAppApp')
    .controller('EventviewCtrl', function($scope, $routeParams, $modal, singleevent) {
        //console.log($routeParams.eventId);
        singleevent.events($routeParams.eventId).success(function(data, status, headers) {
            $scope.events = data;
            console.log(data);
        });

        $scope.open = function() {

            var modalInstance = $modal.open({
                templateUrl: 'views/partials/eventview.html',
                controller: 'ModalInstanceControl',
                scope: $scope

            });
            console.log('modal opened');
            modalInstance.result.then(function() {
                console.log($scope.selected);
            }, function() {
                console.log('modal dismissed at: ' + new Date());
            });
        }
    });