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

            $http.get("/api/Styles/All").success(function (data) {
                $scope.styles = data;
                updateDropDowns();
            });


            function updateDropDowns() {
                if ($scope.product === undefined)
                    return;
                if ($scope.brands !== undefined) {
                    $scope.selectedBrand = $filter('filter')($scope.brands, { Id: $scope.product.BrandId })[0];
                    console.log("$scope.product.BrandId = " + $scope.product.BrandId);
                    console.log($scope.selectedBrand);
                }
                if ($scope.productTypes !== undefined) {
                    $scope.selectedProductType = $filter("filter")($scope.productTypes, { Id: $scope.product.ProductTypeId })[0];
                    console.log("$scope.product.ProductTypeId = " + $scope.product.ProductTypeId);
                    console.log($scope.selectedProductType);
                    console.log($filter("filter")($scope.productTypes, { Id: $scope.product.ProductTypeId }));
                }
                if ($scope.styles !== undefined) {
                    $scope.selectedStyle = $filter("filter")($scope.styles, { Id: $scope.product.StyleId })[0];
                    console.log("$scope.product.StyleId = " + $scope.product.StyleId);
                    console.log($scope.selectedStyle);
                }
            }
            
            $scope.changeBrand = function () {
                $scope.product.Brand = $scope.selectedBrand.Caption;
                $scope.product.BrandId = $scope.selectedBrand.Id;
            }

            $scope.changeProductType = function () {
                $scope.product.ProductType = $scope.selectedProductType.Caption;
                $scope.product.ProductTypeId = $scope.selectedProductType.Id;
            }

            $scope.changeStyle = function () {
                $scope.product.Style = $scope.selectedStyle.Caption;
                $scope.product.StyleId = $scope.selectedStyle.Id;
            }

        }]);