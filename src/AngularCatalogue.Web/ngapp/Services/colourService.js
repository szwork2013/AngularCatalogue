"use strict";

angularCatalogueApp.factory("colourService", ["$resource",
    function ($resource) {
        return $resource("/api/Colours", {}, { query: { method: "GET", params: {}, isArray: true } });
    } ]);