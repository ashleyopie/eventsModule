'use strict';

angular.module('eventsAppApp')
    .controller('ModalInstanceControl', function($scope, $modalInstance) {

        $scope.ok = function() {
            $modalInstance.close();
        }

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        }
    });