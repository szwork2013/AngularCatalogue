"use strict";

angular.module('angularCatalogue').factory("productService", ["$resource",
    function ($resource) {
        var resource = $resource("/api/Product/:productId", 
            {},
            {
                query: { method: "GET", params: { colours: [], brands: [], productTypes: [], sizes: [] }, isArray: true }
            });

        return {
            getProduct: function (productId) {
                return resource.get({ productId: productId });
            },
            getAllProducts: function () { return resource.query(); },
            getFilteredProducts: function (colours, brands, productTypes, sizes) {
                return resource.query({ colours: [colours], brands: [brands], productTypes: [productTypes], sizes: [sizes] });
            }
        };
    }]);