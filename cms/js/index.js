var app = angular.module('cms', [
    'ngRoute',
    'ideacms',
    'cmsRequest'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/ideacms'
    })
});