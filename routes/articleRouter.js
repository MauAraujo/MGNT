var express = require('express');
var app = express();
var router = express.Router();
var Article = require('../models/article'); 

router.get('/', function(req, res){
    res.sendFile('/views/articulos.html', {"root": "../MGNT/public"});
});

router.post('/', function(req, res){
    var articleID = req

    var newArticle =  new Article({
        articleID: req.body.articleID,
        publicationDate: req.body.publicationDate,
        title: req.body.title,
        content: req.body.content,
        index: req.body.index
    });
    Article.createArticle(newArticle);
    res.end('article created!');}
);

router.put('/', function(req, res){
    res.sendStatus(403);
});

router.delete('/', function(req, res){
    res.sendStatus(403);
});

module.exports = router;
