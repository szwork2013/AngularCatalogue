"use strict";

angularCatalogueApp.factory("colourService", function () {
    return {
        allColours: [{ "Id": 2, "Caption": "Blue", "InventoryCount": 96 }, { "Id": 12, "Caption": "Green", "InventoryCount": 30 }, { "Id": 5, "Caption": "Grey", "InventoryCount": 50 }, { "Id": 6, "Caption": "Navy", "InventoryCount": 270 }, { "Id": 14, "Caption": "Orange", "InventoryCount": 6 }, { "Id": 7, "Caption": "Pink", "InventoryCount": 6 }, { "Id": 15, "Caption": "Purple", "InventoryCount": 5 }, { "Id": 8, "Caption": "Red", "InventoryCount": 62 }, { "Id": 10, "Caption": "White", "InventoryCount": 12 }]
    };
});