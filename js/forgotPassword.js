var app = angular.module('feedback.forgotPassword', []);

app.config(function($routeProvider) {
    $routeProvider.when('/forgotPassword', {
        templateUrl: 'views/templates/forgotPassword.tpl.html',
        controller: 'forgotPasswordController'
    })
});

app.controller('forgotPasswordController', function($scope) {
    $scope.message = 'forgotPassword'
})