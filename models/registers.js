const mongoose =require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    Username:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true,
        unique:true
        
    },
    password:{
        type:String,
        required :true
    },
    confirmpassword:{
        type:String,
        required :true
    },
    tokens:[{
        token:{
            type:String,
            required :true
        }
    }]
    
})

//generating token
userSchema.methods.generateAuthToken = async function(){
   try {
    console.log(this._id);
    const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token})
    await this.save();
    return token;
   } catch (error) {
    res.send("the error part"+error);
    res.send("the error part"+error);
   }
}


//middleware for hashing password
  
userSchema.pre("save",async function(next){

    if(this.isModified("password")){
        //const passwordHash = await bcrypt.hash(password,10);
        
        this.password = await bcrypt.hash(this.password,10);
        this.confirmpassword = await bcrypt.hash(this.password,10);
    }
    
    next();
})

//collection

const Register = new mongoose.model("Register",userSchema);
module.exports = Register;