var app = angular.module('feedback.newFeedback', []);

app.config(function($routeProvider) {
    $routeProvider.when('/newFeedback', {
        templateUrl: 'public/views/templates/newFeedback.tpl.html',
        controller: 'newFeedbackController'
    })
});

app.controller('newFeedbackController', function($scope) {
    $scope.message = 'newFeedback';
})