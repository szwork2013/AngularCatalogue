"use strict";
angularCatalogueApp.controller("ProductSearchController",
    ['$scope', '$filter', 'colourService', 'productService', 'brandService', 'productTypeService', 'sizeService',
        function ($scope, $filter, colourService, productService, brandService, productTypeService, sizeService) {
            $scope.colours = colourService().$query();
            $scope.brands = brandService().$query();
            $scope.productTypes = productTypeService().$query();
            $scope.products = productService.query();
            $scope.sizes = sizeService.query();

            $scope.changeUserFilter = function () {
                applyUserFilter();
            };



            function applyUserFilter() {
                var activeColours = $filter('filter')($scope.colours, { isChecked: true });
                console.log(activeColours);
                var colourIds = getIdsFromFilter(activeColours);
                console.log(colourIds);

                var activeBrands = $filter('filter')($scope.brands, { isChecked: true });
                console.log(activeBrands);
                var brandIds = getIdsFromFilter(activeBrands);
                console.log(brandIds);
                $scope.products = productService.query({ colours: [colourIds], brands: [brandIds] });
            }

            function getIdsFromFilter(filterResult) {
                var ids = [];
                angular.forEach(filterResult, function (value, key) {
                    ids.push(value.Id);
                });
                return ids;
            }

        } ]);