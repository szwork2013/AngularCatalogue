"use strict";

angularCatalogueApp.directive("userFilter", ["$compile", function ($compile) {
    return {
        restrict: "A",
        templateUrl: "/ngapp/directives/templates/user-filter-template.html",
        scope: {
            filterItem: "=", // an object
            changeFilter: "&" // a method/function
        }
    }
}]);