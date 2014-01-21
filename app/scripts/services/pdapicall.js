'use strict';

angular.module('eventsAppApp')
    .factory('pdAPItest', function($http) {
        // Service logic
        // ...

        var pdUrl = 'http://indystar.admin.test.planetdiscover.com/api/events/?';
        var api_key = 'vm29t4jhk9vlkpfl7j95omgu0';
        var today = new Date();
        var seven_out = today.setDate(today.getDate() + 7);
        today = formatDate(today);
        seven_out = formatDate(seven_out);

        var runEventRequest = function(username, path) {
            return $http({
                method: 'JSONP',
                url: pdUrl +
                    '&api_key=' + api_key +
                    '&limit=' + 10 //display count
                '&sd=' + today +
                    '&ed=' + seven_out;
            });
        }

        return {
            events: function(username) {
                return runUserRequest(username, 'events');
            }
        };
    });

function formatDate(date) {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}