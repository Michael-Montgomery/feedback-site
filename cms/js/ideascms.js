var app = angular.module('ideacms', [
    'cmsRequest'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/ideacms', {
        templateUrl: 'templates/ideascms.tpl.html',
        controller: 'ideascmsController'
    })
});

app.controller('ideascmsController', function($scope, cmsRequestHandler) {
    $scope.cmsIdeas = [];

    $scope.getIdeas = function() {
        cmsRequestHandler.fetchIdeas(function(response) {
            $scope.cmsIdeas = response.data;

        }, function(response) {
            console.log(response);
        })
    };

    $scope.deleteIdea = function(idx) {
        cmsRequestHandler.deleteIdea($scope.cmsIdeas[idx], function(response) {
            $scope.cmsIdeas = response.data;
        }, function(response) {
            console.log(response)
        })
    }

    $scope.getIdeas();
})
