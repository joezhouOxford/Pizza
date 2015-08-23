'use strict';

describe('pizza.ingredient module', function () {
    var mockIngredientListResponse = [
        {
            "id": 1,
            "type": "base",
            "name": "Tomato Small",
            "price": 5,
            "portions": 3
        }];
    var PizzaServiceInstance;
    beforeEach(function () {
        module('pizza.ingredient');
        module('pizza');
        module('pizza/IngredientListDir.html');
        module('pizza/PizzaIngredientListDir.html');
    });
    beforeEach(inject(function(Pizza){
        PizzaServiceInstance=Pizza;
    }));

    describe('IngredientCtrl', function () {
        var $rootScope, scope, ingredientCtrl, mockPizzaIngredientService, $q, queryDeferred;

        beforeEach(inject(function (_$q_, _$controller_, _$rootScope_) {
            $q = _$q_;
            //mock PizzaIngredient service
            mockPizzaIngredientService = {
                query: function () {
                    queryDeferred = $q.defer();
                    return {$promise: queryDeferred.promise};
                }
            };

            //setup the controller
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();

            ingredientCtrl = _$controller_('IngredientCtrl', {
                $scope: scope,
                PizzaIngredient: mockPizzaIngredientService,
                Pizza: PizzaServiceInstance
            });
        }));

        it('should initialize  pizza ingredient and a  pizza', function () {

            spyOn(mockPizzaIngredientService, 'query').and.callThrough();
            //execute
            scope.init();

            //assert
            //expect PizzaIngredient.query  is called
            expect(mockPizzaIngredientService.query).toHaveBeenCalled();
            expect(scope.pizza).toBeDefined();
            queryDeferred.resolve(mockIngredientListResponse);
            $rootScope.$apply();
            //expect ingredient list is set
            expect(scope.ingredientList).toBeDefined();
        });


    });

    describe('ingredientList directive', function () {
        var $compile, $scope;


        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $scope = _$rootScope_.$new();
        }));
        it("should load pizza/IngedientListDir.html and both ingredient list and pizza set in scope", function () {
            var element = angular.element('<Ingredient-list list="ingredientList" pizza="pizza"></Ingredient-list>');
            $scope.ingredientList = mockIngredientListResponse;
            $scope.pizza = PizzaServiceInstance;
            $compile(element)($scope);
            $scope.$digest();
            // Get the isolate scope for the directive
            var isoScope = element.isolateScope();
            // Make our assertions
            expect(isoScope.list).toBeDefined();
            expect(isoScope.pizza).toBeDefined();
            expect(element.text()).toContain("Select your ingredient");
        });

    });
    describe('pizzaIngredientList directive', function () {
        var $compile, $scope;


        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $scope = _$rootScope_.$new();
        }));
        it("should load pizza/PizzaIngredientListDir.html and both ingredient list and pizza set in scope", function () {
            var element = angular.element('<Pizza-Ingredient-list list="ingredientList" pizza="pizza"></Pizza-Ingredient-list>');
            $scope.ingredientList = mockIngredientListResponse;
            $scope.pizza = PizzaServiceInstance;
            $compile(element)($scope);
            $scope.$digest();
            // Get the isolate scope for the directive
            var isoScope = element.isolateScope();
            // Make our assertions
            expect(isoScope.list).toBeDefined();
            expect(isoScope.pizza).toBeDefined();
            expect(element.text()).toContain("Your pizza");
        });

    });
});
