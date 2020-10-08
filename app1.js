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
  return value;
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

var numproRows,pdbnames,pro;

  

  con.query("SELECT * FROM `users` WHERE `username` = '"+name+"' AND `password` = '"+pass+"'", function(err, results) {
   var numRows = results.length;

con.query('SELECT * FROM productdb ', function(err,rows,fields)   
  {   numproRows = rows.length;
     console.log('done!');
pdbnames= JSON.parse(JSON.stringify(rows || null ));
app.locals.pdbnames;
console.log(pdbnames[0].pname);
console.log(pdbnames[0].type);
console.log(pdbnames[1].type);

console.log('pdbnames')
  
productDet=JSON.stringify(pdbnames || null);
//console.log(productDet);
console.log('productDet');
 
 if(numRows > 0)
  {
    //successfull login
    res.render('products',{username:name,totalp:numproRows,product:pdbnames})
  } else {
    res.send("Invalid Login Credentials");
  }
});
})
}});


app.get('/product/:pid',function(req,res){
 
	var pdetails,totalval=0;
	app.locals.pdetails;
	con.query("SELECT * from productdb where pid='"+req.params.pid+"'", function(err,rows,fields)   
  {   console.log(req.params.pid);

     console.log('done!');
pdetails= JSON.parse(JSON.stringify(rows || null ));
  // console.log(pdetails);
   	res.render('details',{product:pdetails});
   	})
})

app.get('/loginsubmit/:type',function(req,res){
 var type=req.params.type;
var pdbnames2,numproRows;
app.locals.pdbnames2;
con.query("SELECT * FROM productdb ",function(err,rows,fields){
  pdbnames2=JSON.parse(JSON.stringify(rows || null ));

con.query("SELECT * FROM productdb where type='"+type+"' ", function(err,rows,fields)   
  {   numproRows = rows.length;
     console.log('done!');
pdbnames3= JSON.parse(JSON.stringify(rows || null ));



console.log('pdbnames2')
//console.log(productDet);
console.log('productDet');
 
 if(numproRows > 0)
  {
    //successfull login
    res.render('products',{totalp:numproRows,product:pdbnames2,product2:pdbnames2})
  }
  else{
    res.send('no items exist');
  }
})
})
})

app.get('/update/:username', function(req,err,res){
  console.log('update');
  var username=req.params.username;
  var pdb2;
  
  con.query("SELECT * FROM users where username='"+username+"'",function(err,rows,fields){
     pdb2=JSON.parse(JSON.stringify(rows || null ));
    con.query("UPDATE users SET username='new' where username='"+username+"'",function(err,rows,fields){

      console.log('updated successfully');
      

    })
      }) 

  
  

})





app.listen(3000);
console.log('Example app listening at port:3000');


