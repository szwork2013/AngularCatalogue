"use strict";

angularCatalogueApp.controller("editProductController",
    ['$scope', '$routeParams', '$filter', '$http',
        function ($scope, $routeParams, $filter, $http) {
          var originalProduct;
          $http.get("/api/Product/" + $routeParams.productId).success(function (data) {
            originalProduct = data;
            $scope.product = angular.copy(data);
            initDropDowns();
          });

          $http.get("/api/Brands/All").success(function (data) {
              $scope.brands = data;
              initDropDowns();
          });

          $http.get("/api/ProductTypes/All").success(function (data) {
              $scope.productTypes = data;
              initDropDowns();
          });

          $http.get("/api/Styles/All").success(function (data) {
              $scope.styles = data;
              initDropDowns();
          });


          function initDropDowns() {
            if (($scope.product === undefined) || ($scope.brands === undefined) || ($scope.productTypes === undefined) || ($scope.styles === undefined))
              return;


            $scope.selectedBrand = $filter('id')($scope.brands, originalProduct.BrandId);

            $scope.selectedProductType = $filter("id")($scope.productTypes, originalProduct.ProductTypeId);

            $scope.selectedStyle = $filter("id")($scope.styles, originalProduct.StyleId );
          }



          $scope.changeBrand = function () {
            $scope.product.Brand = $scope.selectedBrand.Caption;
            $scope.product.BrandId = $scope.selectedBrand.Id;
          };

          $scope.changeProductType = function () {
            $scope.product.ProductType = $scope.selectedProductType.Caption;
            $scope.product.ProductTypeId = $scope.selectedProductType.Id;
          };

          $scope.changeStyle = function () {
            $scope.product.Style = $scope.selectedStyle.Caption;
            $scope.product.StyleId = $scope.selectedStyle.Id;
          };

        }]);