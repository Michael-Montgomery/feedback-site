var app = angular.module('feedback', [
    'request.svc'
]);








app.controller('feedbackController', function($scope, request) {

    var counter = 2;
    var ideaFormCounter = 2;
    var miniMenuCounter = 2;
    var opacityTicker = 2;

    $scope.ideas = [];

    setInterval(function() {
        if(opacityTicker % 2 === 0) {
            $('#down-arrow').css('opacity', '1');
            opacityTicker++;
        } else {
            $('#down-arrow').css('opacity', '0');
            opacityTicker++;
        }
    }, 4000)




    $(window).scroll(function() {

        var eTop = $('#idea-wrapper').offset().top;
        var pixels = eTop - $(window).scrollTop();


        if($(window).scrollTop() === 0) {
            $('.header').css('background-color', 'transparent').css('opacity', '1').css('height', '80px');
            $('.header nav a input, .header nav a button').css('display', 'none');
            $('.header form select, .header form button').css('display', 'none');
            $('#responsive-footer').css('height', '0');
        } else if($(window).scrollTop() > 0 && pixels > 0) {
            $('.header').css('background-color', 'black').css('opacity', '.7');
            $('.header nav a input, .header nav a button').css('display', 'none');
            $('#refine-button').html('<span class="glyphicon glyphicon-filter"></span>');
            $('.header').css('height', '80px');
            $('#responsive-footer').css('height', '0');
            counter = 2;
            $('.header form select, .header form button').css('display', 'none')
        } else {
            $('.header').css('background-color', 'black').css('opacity', '1');
            if($(window).width() > 600) {
                $('.header nav a input, .header nav a button').css('display', 'inline');
                $('.header nav a input').focus();
            } else {
                //user is on mobile phone
                $('#responsive-footer').css('height', '70px')
            }
        }
    });

    $scope.showFilterOptions = function() {
        if(counter % 2 === 0) {
            $('#refine-button').html('<span class="glyphicon glyphicon-remove"></span>');
            $('.header').css('height', '150px');
            $('.header form select, .header form button').fadeToggle(2000);
            counter++;
        } else {
            $('#refine-button').html('<span class="glyphicon glyphicon-filter"></span>');
            $('.header').css('height', '80px');
            $('.header form select, .header form button').fadeToggle();
            counter++;
        }
        console.log(counter)
    };

    $scope.expandResponsiveFooter = function() {
        if(miniMenuCounter % 2 === 0) {
            $('#responsive-footer').css('height', '500px');
            $('#responsive-footer nav a input').fadeToggle();
            $('#responsive-footer nav a button').html('<span class="glyphicon glyphicon-remove"></span>');
            miniMenuCounter++;
        } else {
            $('#responsive-footer').css('height', '70px');
            $('#responsive-footer nav a input').fadeToggle();
            $('#responsive-footer nav a button').html('<span class="glyphicon glyphicon-plus"></span>');
            miniMenuCounter++;
        }
    };

    $scope.miniMenuIdea = function() {
        $scope.expandResponsiveFooter();
        request.postNewIdea(
            {
                date: new Date(),
                title: $('#res-title').val(),
                idea: $('#res-idea').val(),
                author: $('#res-fName').val() + ' ' + $('#res-lName').val(),
                email: $('#res-email').val(),
                organization: $('#res-org').val(),
                likes: 0,
                roadMapped: false
            },
            function(response) {
                $scope.ideas = response.data;
                console.log(response.data)
            }, function(response) {
                console.log(response);
            })
    }

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
        $('html, body').animate({
            scrollTop: $("#idea-wrapper").offset().top
        }, 1500);
    };

    $scope.toggleDescription = function(idx) {
        alert(idx);
    }




    $scope.fetchIdeas = function() {
        request.fetchIdeas(function(response) {
            $scope.ideas = response.data;
        }, function(response) {
            console.log(response);
        })
    };

    $scope.incrementLike = function(idx) {
        request.incrementLike($scope.ideas[idx], function(response) {
            $scope.ideas = response.data;
        }, function(response) {
            console.log(response);
        })
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