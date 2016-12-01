var app = angular.module('feedback.welcome', []);

app.config(function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'public/views/templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});




app.controller('welcomeController', function($scope) {

    $scope.ideas = [
        {
            dateCreated: new Date(),
            authorName: 'James Mcdonald',
            authorCompany: 'North American Mission Board',
            authorEmail: 'jmcdonald@namb.org',
            ideaTitle: 'Apple and World Aids Day',
            idea: ' In honor of World AIDS Day, Apple is offering more ways than ever for customers to join (RED) in' +
            ' its mission to create an AIDS-free generation. Apple is the world’s largest corporate contributor to the ' +
            'Global Fund, and this year marks its 10th anniversary of supporting (RED) in the fight to end AIDS.',
            upvotes: 12,
            bgImgUrl: 'https://static.pexels.com/photos/242811/pexels-photo-242811.jpeg',
            implemented: false
        },
        {
            dateCreated: new Date(),
            authorName: 'Craig David',
            authorCompany: 'Camino Global',
            ideaTitle: 'Site Stacker delivers the goods',
            authorEmail: 'cdavid@camino.org',
            idea: 'Mobilization is all about people connecting with people. In Global Missions, the best mobilizers ' +
            'are often the ones who have already served abroad. Prospects enjoy hearing their stories and seeing the ' +
            'opportunity to serve through the eyes of someone who has already been there and done that.  Based on this ' +
            'premise, I want to share a simple plan for improving.',
            upvotes: 59,
            bgImgUrl: 'https://static.pexels.com/photos/203027/pexels-photo-203027.jpeg',
            implemented: false
        },
        {
            dateCreated: new Date(),
            authorName: 'James Mcdonald',
            authorCompany: 'North American Mission Board',
            authorEmail: 'jmcdonald@namb.org',
            ideaTitle: 'Apple and World Aids Day',
            idea: ' In honor of World AIDS Day, Apple is offering more ways than ever for customers to join (RED) in' +
            ' its mission to create an AIDS-free generation. Apple is the world’s largest corporate contributor to the ' +
            'Global Fund, and this year marks its 10th anniversary of supporting (RED) in the fight to end AIDS.',
            upvotes: 12,
            bgImgUrl: 'https://static.pexels.com/photos/242811/pexels-photo-242811.jpeg',
            implemented: true
        },
        {
            dateCreated: new Date(),
            authorName: 'Craig David',
            authorCompany: 'Camino Global',
            ideaTitle: 'Site Stacker delivers the goods',
            authorEmail: 'cdavid@camino.org',
            idea: 'Mobilization is all about people connecting with people. In Global Missions, the best mobilizers ' +
            'are often the ones who have already served abroad. Prospects enjoy hearing their stories and seeing the ' +
            'opportunity to serve through the eyes of someone who has already been there and done that.  Based on this ' +
            'premise, I want to share a simple plan for improving.',
            upvotes: 59,
            bgImgUrl: 'https://static.pexels.com/photos/203027/pexels-photo-203027.jpeg',
            implemented: false
        }
    ]

    var picHandler = {
        counter: 0,
        urls: [
            'https://static.pexels.com/photos/91988/pexels-photo-91988.jpeg',
            'https://static.pexels.com/photos/46016/pexels-photo-46016.jpeg',
            'https://static.pexels.com/photos/127561/pexels-photo-127561.jpeg',
            'https://static.pexels.com/photos/162806/apple-fruit-fruits-delicious-162806.jpeg',
            'https://static.pexels.com/photos/241495/pexels-photo-241495.jpeg'
        ],
        nextPic: function() {
            this.counter++;
            if(this.counter === this.urls.length) {
                this.counter = 0;
            }
            return this.urls[this.counter]
        }
    }





    $(window).scroll(function() {
        if($(window).scrollTop() != 0) {
            $('.welcome-header').css('background-color', 'black').css('opacity', '.7')
        } else {
            $('.welcome-header').css('background-color', 'transparent').css('opacity', '1')
        }
    });

    $scope.presentSubmitForm = function() {
        $('.feed-wrapper').fadeToggle();
        $('.idea-form-wrapper').css('display', 'unset')

    };


    $scope.showFeed = function() {
        $('.idea-form-wrapper').fadeToggle().css('display', 'none');
        $('.feed-wrapper').fadeToggle();
    };

    $scope.incrementLike = function(idx) {
        $scope.ideas[idx].upvotes++;
    }


    $scope.submitIdea = function() {
        $scope.ideas.push({
            dateCreated: new Date(),
            authorName: $scope.fName + ' ' + $scope.lName,
            authorCompany: $scope.comp,
            ideaTitle: $scope.title,
            authorEmail: $scope.email,
            idea: $scope.idea,
            upvotes: 0,
            bgImgUrl: picHandler.nextPic(),
            implemented: false

        });

        $scope.showFeed();
    }





    $scope.searchCriteria = {
        showImplemented: true,
        showNonImplemented: true,
        toggleImplemented: function() {
            if($scope.searchCriteria.showImplemented) {
                $scope.searchCriteria.showImplemented = false;
            } else {
                $scope.searchCriteria.showImplemented = true;
            }
        }
    };

    $scope.toggleImplemented = function() {
        $scope.searchCriteria.toggleImplemented();
        if($scope.searchCriteria.showImplemented) {
            $('#show-implemented').html('<i class="fa fa-toggle-on" aria-hidden="true"></i>')
        } else {
            $('#show-implemented').html('<i class="fa fa-toggle-off" aria-hidden="true"></i>')
        }
    };

    $scope.toggleNonImplemented = function() {
        if($scope.searchCriteria.showNonImplemented) {
            $scope.searchCriteria.showNonImplemented = false;
            $('#show-non-implemented').html('<i class="fa fa-toggle-off" aria-hidden="true"></i>')
        } else {
            $scope.searchCriteria.showNonImplemented = true;
            $('#show-non-implemented').html('<i class="fa fa-toggle-on" aria-hidden="true"></i>')
        }
    }


})