var mymodule = require('./mymod');
mymodule(process.argv[2],process.argv[3],function (err,list) {
	if (err) throw err;
	list.forEach(function (f) {
		console.log(f);
	});
});