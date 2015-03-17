var arr = process.argv;
var sum = 0;
var l = arr.length;
var i;

for (i = 2; i < l; i++) {
	sum = sum + Number(arr[i]);
}

console.log(sum);