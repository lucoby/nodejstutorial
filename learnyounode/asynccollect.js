var bl = require('bl');
var http = require('http');

var count = 3;
var pages = []

function collectPage(pg, cb) {
	http.get(process.argv[pg+2],function callback(response) {
		var b = new bl()
		response.pipe(bl(function(err, data) {
			if(err) return cb(err);
			count--;
			pages[pg] = data.toString();
			if (count <= 0) cb(null);
		})) 
	});
}

var i;
for (i = 0; i < count; i++) {
	collectPage(i, function(err) {
		if(err) throw err;
		pages.forEach(function(page) {
			console.log(page);
		})
	})
}