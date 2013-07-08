"use strict";
angularCatalogueApp.controller("productSearchController",
    ['$scope', '$filter', 'colourService', 'productService', 'brandService', 'productTypeService', 'sizeService',
        function ($scope, $filter, colourService, productService, brandService, productTypeService, sizeService) {
            $scope.colours = colourService().$query();
            $scope.brands = brandService().$query();
            $scope.productTypes = productTypeService().$query();
            $scope.sizes = sizeService().$query();
            $scope.products = productService.getAllProducts();

            $scope.changeUserFilter = function () {
                applyUserFilter();
            };

            function applyUserFilter() {
                var activeColours = $filter('filter')($scope.colours, { isChecked: true });
                var colourIds = getIdsFromFilter(activeColours);

                var activeBrands = $filter('filter')($scope.brands, { isChecked: true });
                var brandIds = getIdsFromFilter(activeBrands);

                var activeProductTypes = $filter('filter')($scope.productTypes, { isChecked: true });
                var productTypeIds = getIdsFromFilter(activeProductTypes);

                var activeSizes = $filter('filter')($scope.sizes, { isChecked: true });
                var sizeIds = getIdsFromFilter(activeSizes);

                $scope.products = productService.getFilteredProducts(colourIds, brandIds, productTypeIds, sizeIds);
            }

            function getIdsFromFilter(filterResult) {
                var ids = [];
                angular.forEach(filterResult, function (value, key) {
                    ids.push(value.Id);
                });
                return ids;
            }

        } ]);