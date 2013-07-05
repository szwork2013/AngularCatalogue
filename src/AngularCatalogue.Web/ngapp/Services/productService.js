"use strict";

angularCatalogueApp.factory("productService", ["$resource", 
    function ($resource) {
        return $resource("/api/Products", {}, { query: { method: "GET", params: {colours:[], brands:[]}, isArray: true } });
    }]);