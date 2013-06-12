"use strict";

angularCatalogueApp.factory("productService", function () {
    return {
        allProducts: [
            { "Id": 1, "Brand": "Addidas", "ProductName": "Sportif", "Style": "Regular sleeve", "ProductType": "T-Shirt", "ProductImage": "tshirt-1.png", "Variants": [] },
            { "Id": 2, "Brand": "American Apparel", "ProductName": "Relaxx", "Style": "Long sleeve", "ProductType": "T-Shirt", "ProductImage": "tshirt-2.png", "Variants": [] },
            { "Id": 3, "Brand": "ASOS", "ProductName": "Flow", "Style": "Rolled Sleeve", "ProductType": "T-Shirt", "ProductImage": "tshirt-3.png", "Variants": [] },
            { "Id": 4, "Brand": "ASOS", "ProductName": "Eksell", "Style": "Capped Sleeve", "ProductType": "T-Shirt", "ProductImage": "tshirt-4.png", "Variants": [] },
            { "Id": 5, "Brand": "ASOS", "ProductName": "Jim's", "Style": "Slim fit", "ProductType": "Jeans", "ProductImage": "jeans-5.png", "Variants": [] },
            { "Id": 6, "Brand": "ASOS", "ProductName": "Bob's", "Style": "Slim fit", "ProductType": "Jeans", "ProductImage": "jeans-6.png", "Variants": [] },
            { "Id": 7, "Brand": "Levis", "ProductName": "501s", "Style": "Regular fit", "ProductType": "Jeans", "ProductImage": "jeans-7.png", "Variants": [] },
            { "Id": 8, "Brand": "Jack & Jones", "ProductName": "Planet", "Style": "Slim fit", "ProductType": "Polo-Shirt", "ProductImage": "polo-shirt-8.png", "Variants": [] },
            { "Id": 9, "Brand": "Jack & Jones", "ProductName": "Mercury", "Style": "Slim fit", "ProductType": "Polo-Shirt", "ProductImage": "polo-shirt-9.png", "Variants": [] },
            { "Id": 10, "Brand": "Jack & Jones", "ProductName": "Venus", "Style": "Slim fit", "ProductType": "Polo-Shirt", "ProductImage": "polo-shirt-10.png", "Variants": [] },
            { "Id": 11, "Brand": "Jack & Jones", "ProductName": "Mars", "Style": "Slim fit", "ProductType": "Polo-Shirt", "ProductImage": "polo-shirt-11.png", "Variants": [] },
            { "Id": 12, "Brand": "Jack & Jones", "ProductName": "Saturn", "Style": "Slim fit", "ProductType": "Polo-Shirt", "ProductImage": "polo-shirt-12.png", "Variants": [] },
            { "Id": 13, "Brand": "Jack & Jones", "ProductName": "Jupiter", "Style": "Slim fit", "ProductType": "Polo-Shirt", "ProductImage": "polo-shirt-13.png", "Variants": [] },
            { "Id": 14, "Brand": "Jack & Jones", "ProductName": "Neptune", "Style": "Slim fit", "ProductType": "Polo-Shirt", "ProductImage": "polo-shirt-14.png", "Variants": [] }
        ]
    };
});