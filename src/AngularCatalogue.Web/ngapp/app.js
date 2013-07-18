"use strict";

angular.module("angularCatalogue", ["ngResource", "ui"])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/product/:productId",
            {
                templateUrl: "/ngapp/templates/product.html",
                controller: "productDetailController"
            });
        $routeProvider.when("/editProduct/:productId",
            {
                templateUrl: "/ngapp/templates/editProduct.html",
                controller: "editProductController"
            });
        $routeProvider.when("/",
            {
                templateUrl:"/ngapp/templates/search.html",
                controller: "productSearchController"
            });
    }]);
