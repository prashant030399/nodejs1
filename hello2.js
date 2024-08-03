var p = require('http');
p.createServer( function(req,res) {

    res.write(" <h1>Nodejs by Prashant </h1> <p> Hello </p>   ");
    res.end();
   } ).listen(8090);

   console.log("Hello, It is running at 8090");

