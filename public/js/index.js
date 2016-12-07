var app = angular.module('feedback', [
    'request.svc'
]);








app.controller('feedbackController', function($scope, request) {

    var counter = 2;
    var ideaFormCounter = 2;

    $scope.ideas = [];




    $(window).scroll(function() {

        var eTop = $('#idea-wrapper').offset().top;
        var pixels = eTop - $(window).scrollTop();


        if($(window).scrollTop() === 0) {
            $('.header').css('background-color', 'transparent').css('opacity', '1').css('height', '80px');
            $('.header nav a input, .header nav a button').css('display', 'none');
            $('.header form select, .header form button').css('display', 'none');
        } else if($(window).scrollTop() > 0 && pixels > 0) {
            $('.header').css('background-color', 'black').css('opacity', '.7');
            $('.header nav a input, .header nav a button').css('display', 'none');
            $('#refine-button').html('<i class="fa fa-filter" aria-hidden="true"></i>');
            $('.header').css('height', '80px');
            counter = 2;
            $('.header form select, .header form button').css('display', 'none')
        } else {
            $('.header').css('background-color', 'black').css('opacity', '1');
            $('.header nav a input, .header nav a button').css('display', 'inline');
            $('.header nav a input').focus();
        }
    });

    $scope.showFilterOptions = function() {
        if(counter % 2 === 0) {
            $('#refine-button').html('<i class="fa fa-times" aria-hidden="true"></i>');
            $('.header').css('height', '150px');
            $('.header form select, .header form button').fadeToggle(2000);
            counter++;
        } else {
            $('#refine-button').html('<i class="fa fa-filter" aria-hidden="true"></i>');
            $('.header').css('height', '80px');
            $('.header form select, .header form button').fadeToggle();
            counter++;
        }
        console.log(counter)
    };

    $scope.showIdeaForm = function() {
        if(ideaFormCounter % 2 === 0) {
            $('#footer').css('height', '600px');
            ideaFormCounter++;
        } else {
            $('#footer').css('height', '0');
            ideaFormCounter++;
        }
    };

    $scope.scrollToIdeas = function() {
        $('#idea-wrapper').scrollIntoView(true);
    };

    $scope.fetchIdeas = function() {
        request.fetchIdeas(function(response) {
            $scope.ideas = response.data;
        }, function(response) {
            console.log(response);
        })
    };

    $scope.incrementLike = function(idx) {
        $scope.ideas[idx].likes++;
    };

    $scope.postIdea = function() {
        $scope.showIdeaForm();
        request.postNewIdea(
            {
                date: new Date(),
                title: $scope.title,
                idea: $scope.description,
                author: $scope.fName + ' ' + $scope.lName,
                email: $scope.email,
                organization: $scope.company,
                likes: 0,
                roadMapped: false
            },
           function(response) {
            $scope.ideas = response.data;
                console.log(response.data)
        }, function(response) {
            console.log(response);
        })
    };


    $scope.fetchIdeas();


});