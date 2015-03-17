var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	// if (err) return callback(err);

	fs.readdir(dir,function (err,list){
		if (err) 
			return callback(err);

		list = list.filter(function (file) {
			return path.extname(file) === '.' + ext
		})	
		callback(null, list);
		// var data = [];
		// list.forEach(function (file) {
		// 	if ('.' + ext === path.extname(file)) 
		// 		data[data.length] = file;
		// })
		// callback(null, data);
	});
};