var app = angular.module('feedback', [
    'ngRoute',
    'feedback.welcome',
    'feedback.viewFeedback',
    'feedback.newFeedback',
    'ui.bootstrap'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    })
});