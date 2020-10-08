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
  var sql ="CREATE TABLE productdb(pid int not null auto_increment,pname varchar(50) ,cost int(8),pinf varchar(10000),quantity int(4),type varchar(15),primary key(pid),url text(50))";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log("Table created");
  });
});
