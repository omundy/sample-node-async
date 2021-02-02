"use strict";

// import a module
const ex = require('./examples/module');

// log a random num 0-1
console.log(ex.randomNumber());

// log a random num 0-100
console.log(ex.randomNumber(100));

// log the date
console.log(ex.myDateTime());

// import the http module
const http = require('http');

// create a server and write the date
http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write("The date and time are currently: " + ex.myDateTime());
	res.end();
}).listen(8080);
