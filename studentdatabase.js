var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "seedit",
  database: "nodestudent"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "insert into info (rno, name, marks) values (102,'Vishakha', 98)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

