'use strict';

describe('myApp.pizza module', function () {

    beforeEach(function(){
        module('pizza.Ingredient');
        module('pizza.Pizza');
    });

    describe('pizza controller', function () {

        it('should ....', inject(function ($controller) {
            var ingredientCtrl,scope;
            //spec body
            inject(function ($controller, $rootScope) {
                 scope = $rootScope.$new(); //get a childscope
                 var pizzaIngredient={};
                 pizzaIngredient.query=function(){};
                 ingredientCtrl = $controller('IngredientCtrl',{$scope:scope,PizzaIngredient:pizzaIngredient,Pizza:null});
            })

            expect(ingredientCtrl).toBeDefined();
        }));


    });
});