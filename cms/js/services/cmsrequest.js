var app = angular.module('cmsRequest', []);

app.service('cmsRequestHandler', function($http) {
    this.fetchIdeas = function(goodFunc, badFunc) {
        $http.get('http://localhost:8701/ideas').then(goodFunc, badFunc)
    };
    this.deleteIdea = function(data, goodFunc, badFunc) {
        $http.delete('http://localhost:8701/ideas/' + data.id).then(goodFunc, badFunc)
    }
});
