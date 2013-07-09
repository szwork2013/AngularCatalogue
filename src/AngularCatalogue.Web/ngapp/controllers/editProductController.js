"use strict";

angularCatalogueApp.controller("editProductController",
    ['$scope', '$routeParams', '$filter', '$http', 'productService', 'brandService',
        function ($scope, $routeParams, $filter, $http, productService, brandService) {
            $http.get("/api/Product/"+$routeParams.productId).success(function (data) {
                $scope.product = data;
                updateDropDowns();
            });

            $http.get("/api/Brands/All").success(function (data) {
                $scope.brands = data;
                updateDropDowns();
            });

            function updateDropDowns() {
                if ($scope.product === undefined)
                    return;
                if ($scope.brands !== undefined) {
                    $scope.selectedBrand = $filter('filter')($scope.brands, { Id: $scope.product.BrandId })[0];
                }
            }
            

            $scope.selectedBrand = [];

            $scope.changeBrand = function () {
                $scope.product.Brand = $scope.selectedBrand.Caption;
                $scope.product.BrandId = $scope.selectedBrand.Id;
            }


        }]);