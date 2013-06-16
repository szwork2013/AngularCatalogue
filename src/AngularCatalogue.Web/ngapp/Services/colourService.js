"use strict";

angularCatalogueApp.factory("colourService", ["$http",
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
                    url: "/api/Colours"
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

        //        var service = $resource("/api/Colours", {}, { query: { method: "GET", params: {}, isArray: true} });
        //        console.log(service);
        //        angular.extend(service.prototype, {
        //            query: function (values) {
        //                console.log("In custom query");
        //                var result = this.$query();
        //                console.log(result);
        //                return result;
        //            }
        //        });
        //        console.log(service);
        //        return service;
    } ]);