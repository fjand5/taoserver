var http = require("http");
var sl=0;
http.createServer((req,res)=>{
	sl++;
	console.log("So thiet bi "+ sl);
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end("<h1>Chao thiet bi + sl </h1>");
}).listen(80);