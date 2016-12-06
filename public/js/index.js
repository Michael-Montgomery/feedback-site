var app = angular.module('feedback', []);








app.controller('feedbackController', function($scope) {

    var counter = 2;
    var ideaFormCounter = 2;

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
    }

    $scope.scrollToIdeas = function() {
        $('#idea-wrapper').scrollIntoView(true);
    }





    $scope.ideas = [
        {
            date: new Date(),
            title: '13 hottest tech gifts under $100',
            idea: 'The 1.5-inch device, which features built-in voice assistant Alexa, can read the news ' +
            'aloud, order you an Uber and control lights in the house. It\'s a solid entry-level gift for anyone new ' +
            '(and interested) in the smart home world. While it\'s not as powerful as the Echo, especially when it comes ' +
            'to speaker quality, it\'s more than half the price at $49.',
            author: 'Howard Schultz',
            likes: 23
        },
        {
            date: new Date(2016, 3, 29),
            title: 'North Carolina Gov. Pat McCrory concedes race',
            idea: 'In his video concession, McCrory said that while he still feels there are "questions that should be ' +
            'answered regarding the voting process," it is now clear that "majority of our citizens have spoken and we ' +
            'now should do everything we can to support the 75th governor of North Carolina, Roy Cooper."',
            author: 'Cole Haan',
            likes: 16
        },
        {
            date: new Date(2016, 8, 12),
            title: 'Sorry not sorry, Kelly Ripa.',
            idea: 'The hunt has been on since May, when Michael Strahan made a tense departure from "Live with Kelly ' +
            'and Michael." Ripa said she found out from Strahan, only half an hour before the news leaked, and felt ' +
            'disrespected by her bosses.',
            author: 'Steve Ballmer',
            likes: 77
        }
    ]
})