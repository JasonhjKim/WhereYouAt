const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const mysql = require('mysql');
const secret = require('./secret');

app.use(express.json());

//ALL the RESTAPI Setup GOES HERE
app.get('/', function(req, res){
	res.send('Server is on');
})

//hard code the query
const SELECT_ALL = "SELECT * FROM testing_environment";
app.get('/api', function(req, res){
	connection.query(SELECT_ALL, function(err, results){
		if(err){
			return res.send(err);
		}
		else{
			return res.json({
				data: results
			})
		}
	})
})

//hard code the query
app.get('/api/insert', function(req, res){
	var { firstname, lat, lon } = req.query; 
	firstname = "'"+firstname+"'";
	const INSERT_NEW_RECORD = "INSERT INTO testing_environment (`firstname`, `lon`, `lat`) VALUES ("+firstname+","+lat+","+lon+")";
	connection.query(INSERT_NEW_RECORD, function(err, results){
		if(err){
			return res.send(err);
		} else {
			return res.send(firstname+ " added");
		}
	})
})

app.get('/api/delete', function(req, res){
	var { firstname } = req.query;
	firstname = "'"+firstname+"'";
	const DELETE_EXISTING_RECORD = "DELETE FROM testing_environment WHERE `firstname` = "+firstname+";";
	connection.query(DELETE_EXISTING_RECORD, function(err, results){
		if(err){
			return res.send(err);
		} else {
			return res.send(firstname+" deleted");
		}
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
	if (err) {
		return console.log(err);
	}
	console.log("Database connected....");
})

//SERVER Setup
app.listen(port, function(req, res) {
	console.log('Server is listening on... ' + port);
})

// connection.connect(function() {
// 	console.log("Database is runninng...");
// })
