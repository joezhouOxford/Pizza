'use strict';

app.directive('ingredientList', function () {
	return {
		restrict: "E",
		templateUrl: "pizza/IngredientListDir.html",
		scope: {
			"list": "=",
			"pizza": "="
		}
	}
});