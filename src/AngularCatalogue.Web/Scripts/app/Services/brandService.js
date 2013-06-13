"use strict";

angularCatalogueApp.factory("brandService", ["$resource",
    function ($resource) {
        return $resource("/api/Brands", {}, { query: { method: "GET", params: {}, isArray: true} });
    } ]);