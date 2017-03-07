var app = angular.module('ideaTemplate', []);

app.config(function($routeProvider) {
    $routeProvider.when('/showIdea', {
        templateUrl: 'public/views/templates/idea.tpl.html',
        controller: 'ideaController'
    })
});

app.controller('ideaController', function($scope) {
    $scope.message = 'idea'
})