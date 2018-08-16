var express = require('express');
var app = express();
var router = express.Router();
var Article = require('../models/article');
var moment = require('moment-timezone');

router.get('/', function(req, res){
    res.sendFile('/views/escribir.html', {"root": "../MGNT/public"});
});

router.post('/', function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);

    var newArticle =  new Article({
        articleID: req.body.articleID,
        publicationDate: setDate(),
        title: req.body.title,
        content: req.body.content,
    });
    Article.createArticle(newArticle);
    res.end();
}
);

router.put('/', function(req, res){
    res.sendStatus(403);
});

router.delete('/', function(req, res){
    res.sendStatus(403);
});

function setDate() {
    var today = new Date();
    var curDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes());
    var currentDate = moment(curDate).tz('America/Mexico_City');
    console.log(currentDate);
    return currentDate;
}

module.exports = router;
