'use strict';

describe('pizza module', function () {

    beforeEach(function () {
        module('pizza');
    });

    /*describe('route provider', function () {

     beforeEach(inject(
     function( _$location_, _$route_, _$rootScope_ ) {
     location = _$location_;
     route = _$route_;
     rootScope = _$rootScope_;
     }));



     it('should load Ingredient page on successful load of /pizza', function(){
     location.path('/pizza');



     });


     });*/
    describe('pizza service', function () {
        var pizzaService;
        beforeEach(inject(
            function (_$rootScope_, Pizza) {
                pizzaService = Pizza;
            }
        ));
        describe('validIngredient function', function () {
            var fakeBaseIngredient = {
                "id": 1,
                "type": "base",
                "name": "Tomato Small",
                "price": 5,
                "portions": 3
            };
            var fakeToppingIngredient = {
                "id": 3,
                "type": "topping",
                "name": "mozzarella cheese",
                "price": 1,
                "portion": 1
            };
            it('should set error "You have to choose a base first" when ingredient is not base and there is no base for the pizza', function () {

                var result = pizzaService.validIngredient(fakeToppingIngredient);
                expect(result).toBeFalsy();
                expect(pizzaService.errorMessage).toEqual("You have to choose a base first");
            });
            it('should set error "You only can choose 1 base" when ingredient is  base and there already is a base for the pizza', function () {
                pizzaService.add(fakeBaseIngredient);
                var result = pizzaService.validIngredient(fakeBaseIngredient);
                expect(result).toBeFalsy();
                expect(pizzaService.errorMessage).toEqual("You only can choose 1 base");
            });
            it('should set error "You can\'t add more than 3 portions of topping to this base" when user add more than 3 potion to a small pizza', function () {
                pizzaService.add(fakeBaseIngredient);
                pizzaService.add(fakeToppingIngredient);
                pizzaService.add(fakeToppingIngredient);
                pizzaService.add(fakeToppingIngredient);
                var result = pizzaService.validIngredient(fakeToppingIngredient);
                expect(result).toBeFalsy();
                expect(pizzaService.errorMessage).toEqual("You can't add more than 3 portions of topping to this base");
            });
            it('should return true when a base is chosen, and ingredient is within portion limit', function () {
                pizzaService.add(fakeBaseIngredient);
                pizzaService.add(fakeToppingIngredient);
                pizzaService.add(fakeToppingIngredient);
                var result = pizzaService.validIngredient(fakeToppingIngredient);
                expect(result).toBeTruthy();

            });

        });

    });
});
