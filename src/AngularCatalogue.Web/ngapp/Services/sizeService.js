"use strict";

angularCatalogueApp.factory("sizeService", ["$resource",
    function ($resource) {
        return $resource("/api/Sizes", {}, { query: { method: "GET", params: {}, isArray: true} });
    } ]);