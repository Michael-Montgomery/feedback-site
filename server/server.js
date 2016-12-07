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




var ideas = [

];

app.get('/ideas', function(req, res) {
    res.status(200).send(ideas);
});

app.post('/ideas', function(req, res) {
    var identifier = uuidV4();
    req.body.id = identifier;
    ideas.push(req.body);
    res.status(200).send(ideas);
});




app.listen(8701);