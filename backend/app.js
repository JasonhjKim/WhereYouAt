const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', function(req, res){
	res.send('Server is on');
})

app.listen(port, function(req, res) {
	console.log('Server is listening on...' + port);
})
