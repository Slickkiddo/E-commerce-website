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
  var sql =
  "CREATE TABLE userlogin(lid int not null auto_increment,username varchar(8),password varchar(10),primary key(lid))";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log("Table created");
  });
});


