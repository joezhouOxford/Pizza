'use strict';

angular.module('pizzaShop', ['ngRoute', 'ngResource','myApp.version','pizza','purchase'])

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