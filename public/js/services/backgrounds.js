var app = angular.module('backgrounds.svc', []);

app.service('bgUrls', function() {
    this.bgCounter = 0;
    this.backgroundLinks = [
        'https://static.pexels.com/photos/197560/pexels-photo-197560.jpeg',
        'https://static.pexels.com/photos/148523/pexels-photo-148523.jpeg',
        'https://static.pexels.com/photos/321542/pexels-photo-321542.jpeg',
        'https://static.pexels.com/photos/70577/sunset-birds-flying-sky-70577.jpeg',
        'https://static.pexels.com/photos/261536/pexels-photo-261536.jpeg'
    ];
    this.returnBackgroundUrl = function() {
        this.bgCounter += 1;
        if(this.bgCounter > (this.backgroundLinks.length - 1)) {
            this.bgCounter = 0;
        }
        return this.backgroundLinks[this.bgCounter];
    }
})