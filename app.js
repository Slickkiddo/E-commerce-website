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
console.log(pdbnames[2].type);
console.log(pdbnames[3].type);

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


app.get('/product/:username/:pid',function(req,res){
 var pdetails,totalval=0,username;
  app.locals.pdetails;
 con.query("SELECT * from users where username='"+req.params.username+"'", function(err,rows,fields)
  {username=req.params.username;
    console.log(req.params.username);
  
  con.query("SELECT * from productdb where pid='"+req.params.pid+"'", function(err,rows,fields)   
  {   console.log(req.params.pid);

     console.log('done!');
pdetails= JSON.parse(JSON.stringify(rows || null ));
  // console.log(pdetails);
    res.render('details',{product:pdetails,username:username,pid:pdetails.pid});
    })
})
})


app.get('/loginsubmit/:type',function(req,res){
 var type=req.params.type;
var pdbnames2,numproRows;
app.locals.pdbnames2;
con.query("SELECT * FROM productdb",function(err,rows,fields){
  pdbnames2=JSON.parse(JSON.stringify(rows || null ));

con.query("SELECT * FROM productdb where type='"+type+"' ", function(err,rows,fields)   
  {   numproRows = rows.length;
     console.log('done!');
pdbnames3= JSON.parse(JSON.stringify(rows || null ));


console.log(pdbnames3)
console.log('end')
//console.log(productDet);
console.log('productDet');
 
 if(numproRows > 0)
  {
    //successfull login
    res.render('products',{totalp:numproRows,product:pdbnames3,product2:pdbnames2,username:null})
  }
  else{
    res.send('no items exist');
  }
})
})
})
app.locals.username;
app.locals.record;
app.get('/update/:username', function(req,res){
  var record;

   username=req.params.username;
  console.log(username);
  var pdb2;
  con.query("SELECT * FROM users where username='"+username+"'",function(err,rows,fields){
  
   record= JSON.parse(JSON.stringify(rows || null ));

  res.render('update',{username:username,record1:record});
   })


 
})


app.get('/product/:username/:pid/added',function(req,res){

  var pname,cost,username,pid,prodetails;
  var cdetails;
var total = 0;
  con.query("select * from users where username='"+req.params.username+"'",function(err,rows,fields){
   udetails=JSON.parse(JSON.stringify(rows || null ));
   username=udetails[0].username;
   console.log('udetails done!');
con.query("select * from productdb where pid='"+req.params.pid+"'",function(err,rows,fields){
  cdetails=JSON.parse(JSON.stringify(rows || null ));
  pid=cdetails[0].pid;
  pname=cdetails[0].pname;
  cost=cdetails[0].cost;
  console.log('cdetails done!')
  if(rows){
 con.query("select * from cart where pid='"+req.params.pid+"'", function(err, rows,fields){
  con.query("select * from productdb where pid='"+req.params.pid+"'",function(err,rows,fields){
  prodetails=JSON.parse(JSON.stringify(rows || null ));
      if(rows){
        for(var i = 0; i < rows.length; i++){
          total += prodetails[i].cost;
        }
       
  
con.query("insert into cart(id,pid,cquantity,total) VALUES ('"+udetails[0].id+"','"+pid+"',1,'"+total+"')");

}})
})}})
})});

app.get('/product/:username/:pid/cart',function(req,res){
    var username=req.params.username;
   var prodetails2,prodetails3,totalsum=0,i; 
   con.query('select sum(total) as MytotalSum from cart',function(err,rows,fields){
totalsum=rows[0];
console.log(totalsum);
 con.query("select * from cart,productdb where cart.pid= productdb.pid", function(err, rows,fields){

  prodetails2=JSON.parse(JSON.stringify(rows || null ));
  console.log(prodetails2[0].pid)
  con.query("SELECT DISTINCT * FROM productdb,cart,users  where cart.pid= productdb.pid and users.username='"+username+"' and users.id=cart.id ",function(err,rows,fields){
    console.log(username);
   prodetails3=JSON.parse(JSON.stringify(rows || null ));
   for(i=0;i<rows.length;i++){
  totalsum=totalsum+ prodetails3[i].total*prodetails3[i].cquantity;}
console.log(totalsum);
res.render('final',{totalsum:totalsum,items:rows,product:prodetails2,username:username})
 
   })
    
})})})

app.post('/product/:username/cart/submit',function(req,res){
var i,k;
 var username=req.params.username;
con.query("SELECT DISTINCT sno FROM productdb,cart,users  where cart.pid= productdb.pid and users.username='"+username+"' and users.id=cart.id ",function(err,rows,fields){
  var z=rows[0].sno;
  console.log(z);
  console.log('woqw')
con.query("select * from productdb,cart,users  where cart.pid= productdb.pid and users.username='"+username+"' and users.id=cart.id  ",function(err,rows,fields){
  for (i=0;i<=rows.length;i++){
  con.query("update cart set cart.cquantity='"+req.body.cquantity[i]+"'  where sno='"+z+"'");
  console.log(req.body.cquantity[i]);
z=z+1
}
})

})});

app.get('/logout',function(req,res){
  con.query("SELECT cquantity FROM `cart`,productdb WHERE cart.pid=productdb.pid",function(err,rows,fields){

  con.query('delete from cart');
  res.render('loginpage')

})})

app.get('/:username/receipt',function(req,res){

var totalsum=0;
  var a=con.query("select * from cart,users,productdb where users.username='"+req.params.username+"' and users.id=cart.id  and  cart.pid= productdb.pid",function(err,rows,fields){
 var cdetails1=JSON.parse(JSON.stringify(rows || null ));
 for(i=0;i<rows.length;i++){
  totalsum=totalsum+ cdetails1[i].total*cdetails1[i].cquantity;}
console.log(totalsum); 

   res.render('receipt',{username:req.params.username,product:cdetails1,totalsum:totalsum})

  })})



app.get('/updated/:username', function(req,res){
  
  console.log(req.query.username);
  app.locals.record;
   con.query("SELECT * FROM users where username='"+username+"'",function(err,rows,fields){
   record= JSON.parse(JSON.stringify(rows || null ));

   })

  con.query("UPDATE users SET username='"+req.query.username+"',mobile='"+req.query.mobile+"' where username='"+username+"'",function(err,rows,fields){
  
  
console.log(req.query.mobile);

res.render('loginpage');
})
})


app.get('/Contact', function(req,res){
 
  con.query("Insert into contact(name,email,mobile,subject) VALUES ('"+req.query.name+"','"+req.query.Email+"','"+req.query.Mobile+"','"+req.query.sub+"')",function(err, result)      
{                                                      
res.send('successfully updated');

})
})



    /*con.query("UPDATE users SET username='"+req.query.username+"' where username='"+username+"'",function(err,rows,fields){

    pdb2=JSON.parse(JSON.stringify(rows || null ));
      console.log('updated successfully');

   
res.render('loginpage');
    })*/
       






app.listen(3000);
console.log('Example app listening at port:3000');


