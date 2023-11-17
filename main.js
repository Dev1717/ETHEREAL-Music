require ('dotenv').config();
const express = require("express")
const path = require("path")
const ejs = require('ejs')
const bcrypt = require('bcryptjs');  
const app = express();
const jwt = require("jsonwebtoken");
const cookiParser = require("cookie-parser");
const auth = require("./middleware/auth")
           
 require("./src/conn");
 //collection name
 const Register = require("./models/registers");
  
 const port = process.env.PORT || 4000; 

 const static_path = path.join(__dirname,"../public");

 

 app.use(express.json());
 app.use(cookiParser()); 
 app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');
app.use(express.static('public'))
  
//console.log(process.env.SECRET_KEY);
//routing

app.get("/", (req,res)=>{
    res.render("index");
})

app.get("/secret",(req,res)=>{
   // console.log(`this is the cookie ${req.cookies.jwt}`);
    res.render("secret")
})



app.get("/arijit",auth,(req,res)=>{
    res.render('arijit');
})
app.get("/signup",(req,res)=>{
    res.render('signup'); 
})
app.get("/login",(req,res)=>{
    res.render('login');
})
app.get("/signup_success",(req,res)=>{
    res.render('signup_success');
})
app.get("/profile",auth,(req,res)=>{
    res.render('profile');
})
app.get("/kk",auth,(req,res)=>{
    res.render('kk');
})
app.get("/contact_us",auth,(req,res)=>{
    res.render('contact_us');
})


app.get("/logout",auth,async (req,res)=>{
    try {

        req.user.tokens = req.user.tokens.filter((currElemnet)=>{
            return currElemnet.token !== req.token

        })

        res.clearCookie("jwt");
        console.log("logout succesfully")
        await req.user.save();
        res.render("login");
    } catch (error) {
        res.status(500).send(error)
    }
})



app.get("*",(req,res)=>{
    res.send('404 error ');
})     
 
//create a new user
app.post("/sign_up",async (req,res)=>{
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
  
        if(password === confirmpassword){
            const registerUser = new Register({
                Username : req.body.Username,
                email : req.body.email,  
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            })

            console.log("the success part"+registerUser);

            //middleware generate jwt token
            const token = await registerUser.generateAuthToken();
            console.log("the token part"+token);

        //set the cookie name
        

           res.cookie("jwt",token,{
            expires:new Date(Date.now()+600000),
            httpOnly:true
           });
                 
            
            //console.log(cookie);
            
           
                
           
           const registered = await registerUser.save();
           //console.log("the page part"+registered); 
           
           res.status(201).render('signup_success');
            

        }else{
            res.send("passwords are not matching")
        }
    } catch (error) {
        res.status(400).send(error);
        console.log("the error part page");

    }
   
})

//login---

app.post("/login",async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
       
        const useremail = await Register.findOne({email:email});

        const isMatch = await bcrypt.compare(password,useremail.password); 
        //token
        const token = await useremail.generateAuthToken();
        console.log("the token part"+ token);

        //cookie
        res.cookie("jwt",token,{
            expires:new Date(Date.now()+600000),
            httpOnly:true
        });
        console.log(`this is awsomeeee ${req.cookies.jwt}`);

        

        if(isMatch){
            res.status(201).render("index");
        }else { 
            res.send("invalid login Details");
        }   

    } catch (error) {
        res.status(400).send("invalid login Details")
    }
})






app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})