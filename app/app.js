'use strict';

var app = angular.module('pizza', ['ngRoute', 'ngResource','myApp.version']);

app.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'pizza/Ingredient.html',
        controller: 'IngredientCtrl'
      })
      .when('/purchase', {
        templateUrl: 'purchase/purchase.html',
        controller: 'PurchaseCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
});