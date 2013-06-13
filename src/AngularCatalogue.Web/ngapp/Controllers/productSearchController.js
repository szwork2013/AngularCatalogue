"use strict";
angularCatalogueApp.controller("ProductSearchController",
    ['$scope', 'colourService', 'productService', 'brandService', 'productTypeService', 'sizeService',
        function ($scope, colourService, productService, brandService, productTypeService, sizeService) {
            $scope.colours = colourService.query();
            $scope.brands = brandService.query();
            $scope.productTypes = productTypeService.query();
            $scope.products = productService.query();
            $scope.sizes = sizeService.query();
        } ]);