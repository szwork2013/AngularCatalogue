"use strict";
angularCatalogueApp.controller("ProductSearchController",
    ['$scope', '$filter', 'colourService', 'productService', 'brandService', 'productTypeService', 'sizeService',
        function ($scope, $filter, colourService, productService, brandService, productTypeService, sizeService) {
            $scope.colours = colourService().$query();
            $scope.brands = brandService.query();
            $scope.productTypes = productTypeService.query();
            $scope.products = productService.query();
            $scope.sizes = sizeService.query();

            $scope.changeColour = function () {
                var activeColours = $filter('filter')($scope.colours, { isChecked: true });
                console.log(activeColours);
                var colourIds = [];
                angular.forEach(activeColours, function (value, key) {
                    colourIds.push(value.Id);
                });
                console.log(colourIds);
                $scope.products = productService.query({ colours: [colourIds] });
            };
        } ]);