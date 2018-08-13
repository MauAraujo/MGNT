var mongoose = require('mongoose');

//Create new Schema for articles
var articleSchema = new mongoose.Schema({
    articleID: String,
    publicationDate: String,
    title: String,
    content: String,
    index: Number
});

//Define article model to use
//var Article = mongoose.model('Article', articleSchema);

//Export module
var Article = mongoose.model('Article', articleSchema);

module.exports = Article;

module.exports.getArticleByTitle = function(title, callback){
    var query = {title: title}
    Article.findOne(query, callback);
}

module.exports.createArticle = function(newArticle){
    newArticle.save();
}
