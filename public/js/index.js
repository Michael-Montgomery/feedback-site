var app = angular.module('feedback', []);

app.controller('feedbackController', function($scope) {

    $(window).scroll(function() {

        var eTop = $('#idea-wrapper').offset().top;
        var pixels = eTop - $(window).scrollTop()
        console.log(pixels);


        if($(window).scrollTop() === 0) {
            $('.header').css('background-color', 'transparent').css('opacity', '1');
            $('.header nav a input, .header nav a button').css('display', 'none')
        } else if($(window).scrollTop() > 0 && pixels > 0) {
            $('.header').css('background-color', 'black').css('opacity', '.7');
            $('.header nav a input, .header nav a button').css('display', 'none');
        } else {
            $('.header').css('background-color', 'black').css('opacity', '1');
            $('.header nav a input, .header nav a button').css('display', 'inline')
        }
    })





    $scope.ideas = [
        1,2,3,4,5,6
    ]
})