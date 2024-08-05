 var mysql  = require('mysql2');
 var http = require('http');
 
 http.createServer( function(req,res){

    var con = mysql.createConnection ( {

        host:"localhost",
        user: "root",
        password: "seedit",
        database: "nodestudent"
        });  

        con.connect( function(err){            
            if(err) throw err;


            var sql = " insert into info (rno, name, marks) values(103,'Ankit',89 )";

            con.query(sql, function(err, result) {
                if(err) throw  err;
                res.write( "1 record inserted"   ); 
                res.end();

            });
        });     

    }).listen(8090);
    











































