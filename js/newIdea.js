var app = angular.module('feedback.newIdea', []);

app.config(function($routeProvider) {
    $routeProvider.when('/newIdea', {
        templateUrl: 'views/templates/newIdea.tpl.html',
        controller: 'newIdeaController'
    })
});

app.controller('newIdeaController', function($scope) {
    $scope.message = 'newIdea'
})