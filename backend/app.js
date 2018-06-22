const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const mysql = require('mysql');
const secret = require('./secret');


//ALL the RESTAPI Setup GOES HERE
app.get('/', function(req, res){
	res.send('Server is on');
})

app.get('/api', function(req, res){
	res.json({
		"Tester":"Sendit",
		"test2": 3,
		"test3":"again"
	})
})



//DATABASE Setup
var connection = mysql.createConnection({
	host : '159.65.69.12',
	user : 'bean',
	password : secret.password,
	database : 'WhereYouAt',
});

connection.connect(function(err){
	console.log("Database connected....");
	if (err) {
		return console.log(err);
	}
	console.log("Database connected....");
	connection.query("SELECT * FROM testing_environment", function(err, result, rows){
		if (err) {
			return console.log(err);
		}
		console.log(result[0]);
	})
})

//SERVER Setup
app.listen(port, function(req, res) {
	console.log('Server is listening on... ' + port);
})

// connection.connect(function() {
// 	console.log("Database is runninng...");
// })
