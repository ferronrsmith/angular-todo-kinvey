/*global todomvc, angular  */

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', ['todoStorage']);


todomvc.config(function ($httpProvider) {
    "use strict";
    $httpProvider.defaults.headers.common.Authorization = 'Basic a2lkX2VlWDBjVEpvQmY6N2IzOTc1ZWNiODhhNDNlYzk5OGUzMWJiNjcwMjIyODI=';
});

todomvc.run(function ($rootScope) {
    "use strict";
    $rootScope.serverUrl = 'https://baas.kinvey.com';
    $rootScope.key = 'kid_eeX0cTJoBf';
    $rootScope.collectionName = 'todo-mvc';

});
