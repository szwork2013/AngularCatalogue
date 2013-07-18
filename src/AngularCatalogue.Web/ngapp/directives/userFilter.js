"use strict";

angular.module("angularCatalogue").directive("userFilter", [function () {
    return {
        restrict: "A",
        templateUrl: "/ngapp/directives/templates/user-filter-template.html",
        scope: {
            idPrefix: "@filterItem",
            filterItem: "=", // an object
            changeFilter: "&" // a method/function
        }
    }
}]);