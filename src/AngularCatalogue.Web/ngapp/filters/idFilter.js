"use strict";

angular.module('angularCatalogue').filter("id", function () {
  return function(input, id) {
    var result = null;
    angular.forEach(input, function(value, key) {
      if (value.Id === id) {
        result = value;
        return false;
      }
    });
    return result;
  };
});

