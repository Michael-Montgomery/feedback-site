var app = angular.module('feedback', []);

app.controller('feedbackController', function($scope) {

    var counter = 2;

    $(window).scroll(function() {

        var eTop = $('#idea-wrapper').offset().top;
        var pixels = eTop - $(window).scrollTop();
        console.log(pixels);


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
    })

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
    }

    $scope.scrollToIdeas = function() {
        $('#idea-wrapper').scrollIntoView(true);
    }





    $scope.ideas = [
        1,2,3,4,5,6
    ]
})