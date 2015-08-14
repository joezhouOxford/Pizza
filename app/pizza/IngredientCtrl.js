'use strict';

app.controller('IngredientCtrl', function ($scope,PizzaIngredient, Pizza) {
    PizzaIngredient.query(function (data) {
        $scope.ingredientList = data;
    });
    $scope.pizza =  Pizza;

});
