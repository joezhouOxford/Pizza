'use strict';

app.service('Pizza', function ($rootScope, $http) {
    var self = {};

    self.total = 0; // total of all  pizza ingredient

    self.hasChosenBase = false;//has chosen pizza base
    self.pizzaIngredient = [];
    self.user = {};
    self.showErrorMessage=false;
    self.errorMessage="";
    self.add = function (ingredient) {
        //if ingredient can be added
        if(!validIngredient(ingredient))
         return;

        var newIngredient = true;
        for (var i = 0; i < self.pizzaIngredient.length; i++) {
            if (self.pizzaIngredient[i].ingredient.id == ingredient.id) {
                self.pizzaIngredient[i].count += 1;
                newIngredient = false;
            }
        }
        if (newIngredient) {
            self.pizzaIngredient.push({
                "count": 1,
                "ingredient": ingredient
            });
        }
        self.total += ingredient.price;
        if (self.hasBase())
            self.hasChosenBase = true;
    };
    Array.prototype.sum = function (prop) {
        var total = 0
        for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
        }
        return total
    };
    var setError=function(errMsg){
        self.errorMessage=errMsg;
        self.showErrorMessage=true;
    }
    var validIngredient=function(ingredient) {
        switch (ingredient.type) {
            case "base":
            if(self.hasBase())
            {
                setError("You only can choose 1 base");
                    return false;
            }
                break;
            case "topping":
                if(!self.hasBase())
                {
                    setError("You have to choose a base first");
                    return false;
                }
                else if(self.pizzaIngredient.filter(function(value,index){return value.ingredient.type==='base'})[0].ingredient.portions<self.pizzaIngredient.filter(function(value,index){return value.ingredient.type==='topping'}).sum("count")+1 ){
                    setError("You can't add more than "+self.pizzaIngredient.filter(function(value,index){return value.ingredient.type==='base'})[0].ingredient.portions+" portions of topping to this base");
                    return false;
                }
                    break;
        }
        return true;
    }
    self.hasBase = function () {
        return self.pizzaIngredient.filter(function(value,index){return value.ingredient.type==='base'}).length > 0;
    }
    self.remove = function (index) {
        self.total -= self.pizzaIngredient[index].count * self.pizzaIngredient[index].ingredient.price;
        self.pizzaIngredient.splice(index, 1);
        if (self.total < self.discountForTotalMoreThan) {
            self.discount = 0;
            self.discountMessage = false;
        }
    };

    self.clear = function () {
        self.total = 0;
        self.discount = 0;
        self.discountMessage = false;
        self.time = 0;
        self.pizzaIngredient = [];
    };

    self.purchase = function () {
        //to be implemented
    };

    createPersistentProperty('pizzaIngredient', 'fmPizza', Array);
    createPersistentProperty('total', 'fmTotal', Number);

    function createPersistentProperty(localName, storageName, Type) {
        var json = localStorage[storageName];

        self[localName] = json ? JSON.parse(json) : new Type;

        $rootScope.$watch(
            function () {
                return self[localName];
            },
            function (value) {
                localStorage[storageName] = JSON.stringify(value);
            },
            true
        );
    }

    return self;
});