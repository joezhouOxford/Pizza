'use strict';

angular.module('pizza.ingredient', ['ngRoute'])


    .factory('PizzaIngredient', ['$resource',function ($resource) {
        return $resource('api/pizzaIngredient.json');
    }])
    .controller('IngredientCtrl', ['$scope','PizzaIngredient', 'Pizza',function ($scope, PizzaIngredient, Pizza) {
        $scope.getIngredients=function(){
            PizzaIngredient
                .query()
                .$promise
                .then(function(data){
                    $scope.ingredientList = data;
                });



        };
        $scope.init = function () {
            $scope.getIngredients();
            $scope.pizza = Pizza;
        };

        $scope.init();

    }])
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