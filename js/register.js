var app = angular.module('feedback.register', []);

app.config(function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'views/templates/register.tpl.html',
        controller: 'registerController'
    })
});

app.controller('registerController', function($scope) {
    $scope.message = 'register'
})