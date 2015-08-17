'use strict';

angular.module('pizza.Ingredient', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/pizza', {
                templateUrl: 'pizza/Ingredient.html',
                controller: 'IngredientCtrl'
            })

    }])

    .factory('PizzaIngredient', function ($resource) {
        return $resource('api/pizzaIngredient.json');
    })
.controller('IngredientCtrl', function ($scope,PizzaIngredient, Pizza) {
    PizzaIngredient.query(function (data) {
        $scope.ingredientList = data;
    });
    $scope.pizza =  Pizza;

})
.directive('ingredientList', function () {
    return {
        restrict: "E",
        templateUrl: "pizza/IngredientListDir.html",
        scope: {
            "list": "=",
            "pizza": "="
        }
    }
})
.directive('pizzaIngredientList', function () {
    return {
        restrict: "E",
        templateUrl: "pizza/PizzaIngredientListDir.html",
        scope: {
            "list": "=",
            "pizza": "="
        }
    }
});