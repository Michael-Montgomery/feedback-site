var app = angular.module('feedback.login', []);

app.config(function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/templates/login.tpl.html',
        controller: 'loginController'
    })
});

app.controller('loginController', function($scope) {
    $scope.message = 'login'
})