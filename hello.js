


var http =  require ('http')
http.createServer(  function  (req,res  ){

    res.write("Hello");

    res.end();
    
}   ). listen(8090) 

console.log("Hello It is running at 8090 "   );





