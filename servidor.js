var express = require("express");
var app = express();
var  mongoose = require('mongoose');
var db = mongoose.connection;
var bodyParser = require('body-parser');
var articleRouter = require('./routes/articleRouter');

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to the database
mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('Connection to database succesful!');
});

//Config article router
app.use('/articulos', articleRouter);

//URL
app.get("/", inicio);
app.get("/nosotros", nosotros)
app.get("/contacto", contacto)
app.get("/dashboard", dashboard)


//Acceso a html
app.use(express.static("public"));
app.use("/static", express.static("public"));


function inicio(request, response){

	response.sendFile(__dirname + "/public/index.html");

}

function nosotros(request, response){
	response.sendFile(__dirname + "/public/views/nosotros.html");
}
function contacto(request, response){
	response.sendFile(__dirname + "/public/views/contacto.html");
}
function dashboard(request, response){
	response.sendFile(__dirname + "/public/views/dashboard.html");
}

app.listen(3000);
console.log("running server")
