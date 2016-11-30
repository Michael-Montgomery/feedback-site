var app = angular.module('feedback', [
    'ngRoute',
    'feedback.emailSent',
    'feedback.forgotPassword',
    'feedback.ideas',
    'feedback.login',
    'feedback.newIdea',
    'feedback.preferences',
    'feedback.register',
    'feedback.welcome'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    })
});