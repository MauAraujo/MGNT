var express = require("express");
var app = express();
var  mongoose = require('mongoose');
var db = mongoose.connection;
var bodyParser = require('body-parser');
var morgan = require('morgan');
var articleRouter = require('./routes/articleRouter');
var escribirRouter = require('./routes/escribirRouter');
var jwt    = require('jsonwebtoken'); 
var config = require('./config'); 
var user = require('./routes/user.js');

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Morgan
app.use(morgan('dev'));

//Connect to the database
mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('Connection to database succesful!');
});

//Config article router
app.use('/articulos', articleRouter);
app.use('/escribir', escribirRouter);

//URL
app.get("/", inicio);
app.get("/nosotros", nosotros);
app.get("/contacto", contacto);
app.get("/dashboard", dashboard);

//Sign up
app.post('/register', user.signup);

// express router
var apiRoutes = express.Router();

app.use('/api', apiRoutes);

apiRoutes.post('/login', user.login);

apiRoutes.use(user.authenticate); // route middleware to authenticate and check token

// authenticated routes
apiRoutes.get('/', function(req, res) {
	res.status(201).json({ message: 'Welcome to the authenticated routes!' });
});

apiRoutes.get('/user/:id', user.getuserDetails); // API returns user details 

apiRoutes.put('/user/:id', user.updateUser); // API updates user details

apiRoutes.put('/password/:id', user.updatePassword); // API updates user password

//apiRoutes.post('/expense/:id', expense.saveexpense); // API adds & update expense of the user

//apiRoutes.delete('/expense/:id', expense.delexpense); //API removes the expense details of given expense id

//apiRoutes.get('/expense/:id', expense.getexpense); // API returns expense details of given expense id

//apiRoutes.post('/expense/total/:id', expense.expensetotal); // API returns expense details of given expense id

//apiRoutes.post('/expense/report/:id', expense.expensereport); //API returns expense report based on user input

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
console.log("running server");
