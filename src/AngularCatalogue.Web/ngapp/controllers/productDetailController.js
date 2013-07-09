"use strict";

angularCatalogueApp.controller("productDetailController",
    ['$scope', '$routeParams', 'productService',
        function ($scope, $routeParams, productService) {
            $scope.product = productService.getProduct($routeParams.productId);
        } ]);