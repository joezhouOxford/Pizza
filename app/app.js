'use strict';

var app=angular.module('pizza', ['ngRoute', 'ngResource','myApp.version','pizza.Ingredient','pizza.Pizza'])

.config(function ($routeProvider) {
  $routeProvider
      /*.when('/pizza', {
        templateUrl: 'pizza/Ingredient.html',
        controller: 'IngredientCtrl'
      })
      .when('/purchase', {
        templateUrl: 'purchase/purchase.html',
        controller: 'PurchaseCtrl'
      })*/

      .otherwise({
        redirectTo: '/pizza'
      });
});