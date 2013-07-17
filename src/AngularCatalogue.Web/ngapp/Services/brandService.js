"use strict";

angular.module('angularCatalogue').factory("brandService", ["$http",
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
                    url: "/api/Brands/InUse"
                }).then(function (response) {
                    var data = response.data;
                    if (data) {
                        angular.copy(parseResponse(data), value);
                    }
                });
                return value;
            };

            brand.prototype.$query = function () {
                return brand.$query.call(this);
            };


            brand.$all = function () {
                var value = this instanceof brand ? [this] : [new brand()];
                $http({
                    method: "GET",
                    url: "/api/Brands/All"
                }).then(function (response) {
                    var data = response.data;
                    if (data) {
                        angular.copy(parseResponse(data), value);
                    }
                });
                return value;
            }

            brand.prototype.$all = function () {
                return brand.$all.call(this);
            };


            return brand;
        }

        return brandServiceFactory;
    }]);