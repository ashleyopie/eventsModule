'use strict';

angular.module('eventsAppApp')
    .factory('pdAPItest', function($http) {
        // Service logic
        // ...
        var offset = new Date().getTimezoneOffset();

        function formatDate(date) {
            return ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + roundMinutes(date.getMinutes()) + ':' + ("0" + date.getSeconds()).slice(-2);
        }

        function roundMinutes(min) {
            if (min <= 30) {
                return "00";
            } else {
                return "30";
            }
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
        var tempElistStore = null;
        var tempBlistStore = null;

        var runEventRequest = function() {
            if (tempElistStore === null) {
                tempElistStore = $http({

                    method: 'POST',
                    url: pdUrl +
                        '&api_key=' + api_key +
                        '&sd=' + today +
                        '&ed=' + futureDate +
                        '&limit=' + 15 +
                        '&sort=' + 'startDate'
                });
            }
            return tempElistStore;

        };

        var getBestBets = function() {
            if (tempBlistStore === null) {
                tempBlistStore = $http({

                    method: 'POST',
                    url: pdUrl +
                        '&api_key=' + api_key +
                        '&sd=' + today +
                        '&sort=' + 'startDate' +
                        '&attribFilter=' + '(attr_best_bet=yes)' +
                        '&limit=' + 3
                });
            }
            return tempBlistStore;
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