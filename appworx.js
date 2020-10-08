var express=require('express')
app=express()
var mysql=require ('mysql')
var util = require('util');
var json=require('json')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');

function replacer(key, value) {
  console.log(typeof value);
  if (key === 'pid') {
    return undefined;
  }
 // return value;
}

var router = express.Router();

app.use(express.static(__dirname + '/public'));
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'users'
});

app.get('/',function(req,res){
  res.sendFile(__dirname +'/public/login.html');
});
 


app.post('/signupSubmit', function(req,res,next) {
con.query("Insert into users (name,email,username,mobile,password,confirmpassword,address) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.username+"','"+req.body.Mobile+"','"+req.body.password+"','"+req.body.confirm+"','"+req.body.address+"')",function(err, result)      
{                                                      
  if (err) console.log(err);
});
res.render('loginpage')  

//var name=req.body.username;
//res.render('loginpage',{output:name});
});

app.post('/loginsubmit',function(req,res){


if(req.query.username != '' && req.query.password != '')
{
var name = req.body.username;
var pass = req.body.password;

var numproRows,pdbnames,i;
app.locals.pdbnames;
  

  con.query("SELECT * FROM `users` WHERE `username` = '"+name+"' AND `password` = '"+pass+"'", function(err, results) {
   var numRows = results.length;

con.query('SELECT * FROM productdb ', function(err,rows,fields)   
  {   numproRows = rows.length;
     console.log('done!');
pdbnames= JSON.parse(JSON.stringify(rows || null ));
console.log(pdbnames[0]);
  /*product=json.parse(res.json(rows));
     for(i=0;i<rows.length;i++)
        productnames.push(rows[i].pname) ;
     res.send(productnames);*/
productDet=JSON.stringify(pdbnames || null);
 if(numRows > 0)
  {
    //successfull login
    res.render('products',{username:name,totalp:numproRows,product:productDet})
  } else {
    res.send("Invalid Login Credentials");
  }
});
})
}});


 
  
     
  

app.listen(3000);
console.log('Example app listening at port:3000');


