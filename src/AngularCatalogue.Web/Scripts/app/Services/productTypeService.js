"use strict";


angularCatalogueApp.factory("productTypeService", ["$resource",
    function ($resource) {
        return $resource("/api/ProductTypes", {}, { query: { method: "GET", params: {}, isArray: true} });
    } ]);