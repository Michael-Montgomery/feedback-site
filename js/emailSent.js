var app = angular.module('feedback.emailSent', []);

app.config(function($routeProvider) {
    $routeProvider.when('/emailSent', {
        templateUrl: 'views/templates/emailSent.tpl.html',
        controller: 'emailSentController'
    })
});

app.controller('emailSentController', function($scope) {
    $scope.message = 'emailSent'
})