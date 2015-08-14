'use strict';

app.factory('PizzaIngredient', function ($resource) {
    return $resource('api/pizzaIngredient.json');
});