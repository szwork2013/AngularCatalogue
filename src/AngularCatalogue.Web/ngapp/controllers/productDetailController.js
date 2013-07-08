"use strict";

angularCatalogueApp.controller("productDetailController",
    ['$scope', '$routeParams', 'productService',
        function ($scope, $routeParams, productService) {
            console.log("productDetailController");
            console.log("Product Id = " + $routeParams.productId);
            $scope.product = productService.getProduct($routeParams.productId);
            console.log($scope.product);
        } ]);