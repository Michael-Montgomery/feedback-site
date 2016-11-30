var app = angular.module('feedback.welcome', []);

app.config(function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'views/templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});

app.controller('welcomeController', function($scope) {
    $scope.message = 'welcome'
})