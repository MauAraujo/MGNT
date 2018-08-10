var  mongoose = require('mongoose');

var Article = mongoose.models('Article');

Article.find({}, function(err, art){
    if (err) res.render('error', { error: 'Could not query from db'});
    res.render('article', { article: article});
});
