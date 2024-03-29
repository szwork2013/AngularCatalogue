﻿"use strict";

angular.module("angularCatalogue").factory("productTypeService", ["$http",
    function ($http) {
        function productTypeServiceFactory() {
            function parseResponse(data) {
                angular.forEach(data, function (value, key) {
                    value.isChecked = false;
                });
                return data;
            }

            function productType(value) {
                angular.copy(value || [], this);
            }

            productType.$query = function () {
                var value = this instanceof productType ? [this] : [new productType()];
                $http({
                    method: "GET",
                    url: "/api/ProductTypes/InUse"
                }).then(function (response) {
                    var data = response.data;
                    if (data) {
                        angular.copy(parseResponse(data), value);
                    }
                });
                return value;
            };

            productType.prototype.$query = function () {
                productType.$query.call(this);
            };

            return productType;
        }

        return productTypeServiceFactory;
    }]);

