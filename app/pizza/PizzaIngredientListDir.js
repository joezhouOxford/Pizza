'use strict';

app.directive('pizzaIngredientList', function () {
	return {
		restrict: "E",
		templateUrl: "pizza/PizzaIngredientListDir.html",
		scope: {
			"list": "=",
			"pizza": "="
		}
	}
});
