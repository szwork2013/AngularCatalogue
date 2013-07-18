"use strict";

angular.module("angularCatalogue").controller("editProductController",
    ["$scope", "$routeParams", "$filter", "$http",
        function ($scope, $routeParams, $filter, $http) {
          var originalProduct;
          $http.get("/api/Product/" + $routeParams.productId).success(function (data) {
            updateProduct(data);
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

          $http.get("/api/Colours/All").success(function (data) {
            $scope.colours = data;
            initDropDowns();
          });

          $http.get("/api/Sizes/All").success(function (data) {
            $scope.sizes = data;
            initDropDowns();
          });

          function updateProduct(data) {
            originalProduct = data;
            $scope.product = angular.copy(data);
            initDropDowns();
          }

          function isReadyToInitDropDowns() {
            return (($scope.product === undefined)
              || ($scope.brands === undefined)
              || ($scope.productTypes === undefined)
              || ($scope.styles === undefined)
              || ($scope.colours === undefined)
              || ($scope.sizes === undefined));
          }

          function initDropDowns() {
            if (isReadyToInitDropDowns())
              return;

            $scope.selectedBrand = $filter("id")($scope.brands, originalProduct.BrandId);
            $scope.selectedProductType = $filter("id")($scope.productTypes, originalProduct.ProductTypeId);
            $scope.selectedStyle = $filter("id")($scope.styles, originalProduct.StyleId);
            angular.forEach($scope.product.Variants, function (variant) {
              initVariant(variant);
            });
          }

          function initVariant(variant) {
            variant.selectedColour = $filter("id")($scope.colours, variant.ColourId);
            variant.selectedSize = $filter("id")($scope.sizes, variant.SizeId);
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

          $scope.changeColour = function (variant) {
            variant.Colour = variant.selectedColour.Caption;
            variant.ColourId = variant.selectedColour.Id;
          };

          $scope.changeSize = function (variant) {
            variant.Size = variant.selectedSize.Caption;
            variant.SizeId = variant.selectedSize.Id;
          };

          $scope.removeVariant = function (variant) {
            $scope.product.Variants = $filter("allBut")($scope.product.Variants, variant);
          };

          $scope.addNewVariant = function () {
            var variant = {
              ProductId: $scope.product.Id,
              SizeId: $scope.sizes[0].Id,
              ColourId: $scope.colours[0].Id
            }
            initVariant(variant);
            $scope.product.Variants.push(variant);

          };

          $scope.saveProduct = function () {
            $("#save-in-progress-spinner").removeClass("not-waiting");
            $("#save-message").html("").removeClass();
            $http.post("/api/Product/" + $scope.product.Id, $scope.product)
              .success(function (data, status) {
                $("#save-in-progress-spinner").addClass("not-waiting");
                $("#save-message").addClass("text-success").html("Success!");
                updateProduct(data);
              })
              .error(function (data, status) {
                $("#save-in-progress-spinner").addClass("not-waiting");
                $("#save-message").addClass("text-error").html("An error happened and the product was not saved");
              });
          }

        }]);