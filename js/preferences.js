var app = angular.module('feedback.preferences', []);

app.config(function($routeProvider) {
    $routeProvider.when('/preferences', {
        templateUrl: 'views/templates/preferences.tpl.html',
        controller: 'preferencesController'
    })
});

app.controller('preferencesController', function($scope) {
    $scope.message = 'preferences'
})