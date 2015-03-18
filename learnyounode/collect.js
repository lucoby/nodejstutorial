var bl = require('bl');
var http = require('http');

http.get(process.argv[2],function callback(response) {
	var b = new bl()
	response.pipe(bl(function(err,data) {
		if(err) throw err;
		console.log(data.length);
		console.log(data.toString());
	})) 
});