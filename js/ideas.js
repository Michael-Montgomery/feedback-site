var app = angular.module('feedback.ideas', []);

app.config(function($routeProvider) {
    $routeProvider.when('/ideas', {
        templateUrl: 'views/templates/ideas.tpl.html',
        controller: 'ideasController'
    })
});

app.controller('ideasController', function($scope) {
    $scope.message = 'ideas'
})