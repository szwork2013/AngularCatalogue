"use strict";

angularCatalogueApp.factory("brandService", ["$http",
    function ($http) {
        function brandServiceFactory() {
            function parseResponse(data) {
                angular.forEach(data, function (value, key) {
                    value.isChecked = false;
                });
                return data;
            }

            function brand(value) {
                angular.copy(value || [], this);
            }

            brand.$query = function () {
                var value = this instanceof brand ? [this] : [new brand()];
                $http({
                    method: "GET",
                    url: "/api/Brands"
                }).then(function (response) {
                    var data = response.data;
                    if (data) {
                        angular.copy(parseResponse(data), value);
                    }
                });
                return value;
            };

            brand.prototype.$query = function () {
                brand.$query.call(this);
            };

            return brand;
        }

        return brandServiceFactory;
    }]);

//"use strict";

//angularCatalogueApp.factory("brandService", ["$resource",
//    function ($resource) {
//        return $resource("/api/Brands", {}, { query: { method: "GET", params: {}, isArray: true} });
//    } ]);