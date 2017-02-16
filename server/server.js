var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
var uuidV4 = require('uuid/v4');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());






mongoose.connect('mongodb://localhost/feedback');


var ideaModel = require('./models/idea.js');

var counter = 0;

var backgrounds = {
    links: [
        'https://static.pexels.com/photos/197560/pexels-photo-197560.jpeg',
        'https://static.pexels.com/photos/148523/pexels-photo-148523.jpeg',
        'https://static.pexels.com/photos/321542/pexels-photo-321542.jpeg',
        'https://static.pexels.com/photos/70577/sunset-birds-flying-sky-70577.jpeg',
        'https://static.pexels.com/photos/261536/pexels-photo-261536.jpeg'
    ],
    returnNextUrl: function () {
        if(counter >= this.links.length) {
            counter = 0;
        }
        return this.links[counter]
    }
}



app.get('/ideas', function(req, res) {
    ideaModel.find(function(err, ideas) {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(ideas);
        }
    })
});

app.post('/ideas', function(req, res) {



    var newIdea = new ideaModel({
        date: req.body.date,
        title: req.body.title,
        idea: req.body.idea,
        author: req.body.author,
        email: req.body.email,
        organization: req.body.organization,
        likes: req.body.likes,
        roadMapped: req.body.roadMapped,
        bgUrl: backgrounds.returnNextUrl()
    });

    newIdea.save(function(err, savedItem) {
        if(err) {
            res.status(500).send(err);
        } else {
            ideaModel.find(function(err, ideas) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(ideas);
                }
            })
        }
    })
});

app.put('.ideas/:id', function(req, res) {
    var passedId = req.params.id;
    ideaModel.find({_id: passedId}, function(err, found) {
        if(err) {
            res.status(500).send(err);
        } else {
            found.likes++;
            ideaModel.find(function(err, ideas) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(ideas);
                }
            })
        }
    })
})

app.delete('/ideas/:id', function(req, res) {
    var passedId = req.params.id;
    ideaModel.findOneAndRemove({_id: passedId}, function(err, removed) {
        if(err) {
            res.status(500).send(err);
        } else {
            ideaModel.find(function(err, ideas) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(ideas);
                }
            })
        }
    })
})




app.listen(8701);


