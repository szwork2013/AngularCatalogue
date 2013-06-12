"use strict";
angularCatalogueApp.controller("ProductSearchController", function($scope, colourService, productService) {
    $scope.colours = colourService.allColours;
    $scope.products = productService.allProducts;
});