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
        roadMapped: req.body.roadMapped
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


    // var date = Mdate;
    // var title = Mtitle;
    // var idea = Midea;
    // var author = Mauthor;
    // var email = Memail;
    // var organization = Morg;
    // var likes = Mlikes;
    // var roadMapped = MroadMapped;




});

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


