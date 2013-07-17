"use strict";

angular.module('angularCatalogue').directive("productDetails", ["$compile", function ($compile) {
  return {
    restrict: "A",
    templateUrl: "/ngapp/directives/templates/product-details-template.html",
    scope: {
      product: "=", // an object
    }
  }
}]);