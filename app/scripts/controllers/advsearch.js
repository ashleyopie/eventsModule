'use strict';

angular.module('eventsAppApp')
  .controller('AdvsearchCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

function Ctrl2($scope) {
  $scope.format = 'M/d/yy h:mm:ss a';
}