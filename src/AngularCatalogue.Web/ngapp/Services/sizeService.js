﻿"use strict";

angular.module("angularCatalogue").factory("sizeService", ["$http",
    function ($http) {
        function sizeServiceFactory() {
            function parseResponse(data) {
                angular.forEach(data, function (value, key) {
                    value.isChecked = false;
                });
                return data;
            }

            function size(value) {
                angular.copy(value || [], this);
            }

            size.$query = function () {
                var value = this instanceof size ? [this] : [new size()];
                $http({
                    method: "GET",
                    url: "/api/Sizes/InUse"
                }).then(function (response) {
                    var data = response.data;
                    if (data) {
                        angular.copy(parseResponse(data), value);
                    }
                });
                return value;
            };

            size.prototype.$query = function () {
                size.$query.call(this);
            };

            return size;
        }

        return sizeServiceFactory;
    }]);