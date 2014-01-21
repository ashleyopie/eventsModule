'use strict';

angular.module('eventsAppApp')
    .directive('starfooter', function() {
        return {
            templateUrl: 'views/footer.html',
            restrict: 'E',
            replace: true
        };
    });