var fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];
fs.readdir(process.argv[2],function (err,list){
	if (err) throw err;
	for (f in list) {
		if (ext == path.extname(list[f])) console.log(list[f]);
	}
});