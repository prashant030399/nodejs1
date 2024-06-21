



var http =  require ('http')

http.createServer(  function  (req,res  ){

    res.writeHead(200,{'content-Type': 'text/html'});

    res.write("<h1>Ashok </h1>");

    res.end()
    
}   ). listen(3000,() =>  {

console.log('Server is listening on port 3000');

}   );



















