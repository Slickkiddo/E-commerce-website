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
  "CREATE TABLE cart(sno int not null auto_increment,id int references users(id) ,pid int references productdb(pid),cquantity int(4) references productdb(quantity) ,total int(8),primary key(sno) )";
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    console.log("Table created");
  });
});

