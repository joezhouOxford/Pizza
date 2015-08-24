/*jshint browser:true */
'use strict';
//load style
require("bower/bootstrap/dist/css/bootstrap.min.css");

require('./vendor')();
// load the main app file
require('app.js');
require('pizza/Pizza.js');
require('pizza/Ingredient.js');
require('purchase/PurchaseCtrl.js');
require('components/version/version.js');
require('components/version/version-directive.js');
require('components/version/interpolate-filter.js');

// replaces ng-app="appName"
/*
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        //strictDi: true
    });
});*/
