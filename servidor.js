var express = require("express");
var app = express();

//URL
app.get("/", inicio);
app.get("/nosotros", nosotros)


//Acceso a html 
app.use(express.static("public"));
app.use("/static", express.static("public"));


function inicio(request, response){

	response.sendFile(__dirname + "/public/index.html");

}

function nosotros(request, response){
	response.sendFile(__dirname + "/public/views/nosotros.html");
}


app.listen(3000);
console.log("running server")
