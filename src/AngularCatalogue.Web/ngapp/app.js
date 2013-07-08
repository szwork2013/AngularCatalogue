"use strict";

var angularCatalogueApp = angular.module('angularCatalogue', ["ngResource", "ui"])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when("/product/:productId",
            {
                templateUrl: "/ngapp/templates/product.html",
                controller: "productDetailController"
            });
        $routeProvider.when("/",
            {
                templateUrl:"/ngapp/templates/search.html",
                controller: "productSearchController"
            });
    }]);
