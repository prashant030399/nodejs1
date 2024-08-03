

var  p = require('http');
p.createServer( function(req, res){
res.write("Hello");
res.end();

} ).listen(8090);
console.log("Hello");



