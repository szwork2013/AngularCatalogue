"use strict";
angularCatalogueApp.controller("ProductSearchController",
    ['$scope', 'colourService', 'productService',
        function($scope, colourService, productService) {
            $scope.colours = colourService.allColours;
            $scope.products = productService.allProducts;
        }]);