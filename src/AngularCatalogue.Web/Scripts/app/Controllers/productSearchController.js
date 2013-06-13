"use strict";
angularCatalogueApp.controller("ProductSearchController",
    ['$scope', 'colourService', 'productService', 'brandService', 'productTypeService',
        function ($scope, colourService, productService, brandService, productTypeService) {
            $scope.colours = colourService.query();
            $scope.brands = brandService.query();
            $scope.productTypes = productTypeService.query();
            $scope.products = productService.query();
        } ]);