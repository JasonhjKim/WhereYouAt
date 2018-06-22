const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', function(req, res){
	res.send('Server is on');
})

app.get('/api', function(req, res) {
	res.json({
		"Test": "This is some shit",
		"Test2" : 3,
		"Test3" : "other shit",
	}) 
})

app.listen(port, function(req, res) {
	console.log('Server is listening on...' + port);
})
