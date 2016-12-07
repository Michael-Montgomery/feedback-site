var app = angular.module('request.svc', []);

app.service('request', function($http) {
    this.fetchIdeas = function(goodFunc, badFunc) {
        $http.get('http://localhost:8701/ideas').then(goodFunc, badFunc)
    }
    this.postNewIdea = function(data, goodFunc, badFunc) {
        $http.post('http://localhost:8701/ideas', data).then(goodFunc, badFunc)
    }
})
