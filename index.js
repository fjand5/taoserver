var http = require("http");
var sl=0;
http.createServer((req,res)=>{
	sl++;
	console.log("So thiet bi "+ sl);
	res.end("Chao thiet bi " +sl);
}).listen(80);