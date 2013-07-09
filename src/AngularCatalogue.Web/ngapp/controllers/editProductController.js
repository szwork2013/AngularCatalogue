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

            $http.get("/api/ProductTypes/All").success(function (data) {
                $scope.productTypes = data;
                updateDropDowns();
            });


            function updateDropDowns() {
                if ($scope.product === undefined)
                    return;
                if ($scope.brands !== undefined) {
                    $scope.selectedBrand = $filter('filter')($scope.brands, { Id: $scope.product.BrandId })[0];
                }
                if ($scope.productTypes !== undefined) {
                    $scope.selectedProductType = $filter("filter")($scope.productTypes, { Id: $scope.product.ProductTypeId })[0];
                }
            }
            

            $scope.selectedBrand = {};
            $scope.selectedProductType = {};

            $scope.changeBrand = function () {
                $scope.product.Brand = $scope.selectedBrand.Caption;
                $scope.product.BrandId = $scope.selectedBrand.Id;
            }

            $scope.changeProductType = function () {
                $scope.product.ProductType = $scope.selectedProductType.Caption;
                $scope.product.ProductTypeId = $scope.selectedProductType.Id;
            }

        }]);