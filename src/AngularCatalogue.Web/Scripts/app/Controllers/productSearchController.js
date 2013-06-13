"use strict";
angularCatalogueApp.controller("ProductSearchController",
    ['$scope', 'colourService', 'productService', 'brandService',
        function ($scope, colourService, productService, brandService) {
            $scope.colours = colourService.query();
            $scope.brands = brandService.query();
            $scope.products = productService.query();
        } ]);