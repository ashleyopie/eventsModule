'use strict';

angular.module('eventsAppApp')
    .factory('pdAPItest', function($http) {
        // Service logic
        // ...
        function formatDate(date) {
            return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + '%20' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        }



        var pdUrl = 'http://indystar.test.planetdiscover.com/api/events/?';
        var api_key = 'vm29t4jhk9vlkpfl7j95omgu0';
        var today = new Date();
        var daysInFuture = 7;
        var futureDate = new Date();

        today = formatDate(today);
        futureDate.setDate(futureDate.getDate() + daysInFuture);
        futureDate = formatDate(futureDate);

        //CORS support
        //delete $http.defaults.headers.common['X-Requested-With'];

        var runEventRequest = function() {
            return $http({

                method: 'POST',
                url: pdUrl +
                    '&api_key=' + api_key +
                    '&sd=' + today +
                    '&ed=' + futureDate +
                    '&limit=' + 15 +
                    '&sort=' + 'startDate'
            });
        };

        var getBestBets = function() {
            return $http({

                method: 'POST',
                url: pdUrl +
                    '&api_key=' + api_key +
                    '&sd=' + today +
                    '&sort=' + 'startDate' +
                    '&attribFilter=' + '(attr_best_bet=yes)' +
                    '&limit=' + 3



            });
        };

        return {
            events: function() {
                return runEventRequest('events');
            },
            bestBets: function() {
                return getBestBets('events');
            }
        };
    });