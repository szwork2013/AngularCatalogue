"use strict";

angular.module("angularCatalogue").filter("allBut", function () {
  return function (input, butThis) {
    var result = [];
    angular.forEach(input, function (value) {
      if (value !== butThis) {
        result.push(value);
      }
    });
    return result;
  };
});
