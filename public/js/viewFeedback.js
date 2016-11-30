var app = angular.module('feedback.viewFeedback', []);

app.config(function($routeProvider) {
    $routeProvider.when('/viewFeedback', {
        templateUrl: 'public/views/templates/viewFeedback.tpl.html',
        controller: 'viewFeedbackController'
    })
});

app.controller('viewFeedbackController', function($scope) {
    $scope.message = 'viewFeedback';
})