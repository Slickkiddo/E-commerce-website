var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

con.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected!");
  var sql ="CREATE TABLE contact(name varchar(50) ,email varchar(15),mobile int(10),subject varchar(500))";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log("Table created");
  });
});


