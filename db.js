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
  "CREATE TABLE users(id int auto_increment,name char(25) not null,email varchar(25) not null,username varchar(15) not null,mobile int(10) not null,password varchar(15) not null,confirmpassword varchar(15) not null,address varchar(100)not null,primary key(id)) ";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log("Table created");
  });
});

