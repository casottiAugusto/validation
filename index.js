const bodyParser = require("body-parser");
const express =require ("express");
const session = require("express-session");
const flash=require("express-flash");
const app =express();


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(flash());





app.get('/',(req,res)=>{
  res.render("index")
});
app.post("/form",(req,res)=>{
 let {email,nome,pontos}=req.body;
 
});


app.listen(8080,(res,req)=>{
console.log("To vivo!!!!!!!!!!!!")
})