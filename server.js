var express = require('express');
var middleware = require('./middleware.js');
var app = express();

var PORT = 3000;

// This is middleware definition


app.use(express.static(__dirname+'/public'));

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){

	res.send('About Node JS Express module');
});

app.get('/MyApp/Login',middleware.requireAuthentication, function(req,res){

	res.send('Logged in succesfully');
});

app.listen(PORT,function(){

	console.log("Server started");
});