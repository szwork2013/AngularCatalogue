"use strict";

angular.module('angularCatalogue').factory("colourService", ["$http",
    function ($http) {
        function colourServiceFactory() {
            function parseResponse(data) {
                angular.forEach(data, function (value, key) {
                    value.isChecked = false;
                });
                return data;
            }

            function colour(value) {
                angular.copy(value || [], this);
            }

            colour.$query = function () {
                var value = this instanceof colour ? [this] : [new colour()];
                $http({
                    method: "GET",
                    url: "/api/Colours/InUse"
                }).then(function (response) {
                    var data = response.data;
                    if (data) {
                        angular.copy(parseResponse(data), value);
                    }
                });
                return value;
            };

            colour.prototype.$query = function () {
                colour.$query.call(this);
            };

            return colour;
        }

        return colourServiceFactory;
    } ]);