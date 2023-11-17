const jwt = require("jsonwebtoken");
const Register = require('../models/registers');

const auth = async (req,res,next)=>{
    try {

        const token  = req.cookies.jwt;
        const verifyUser = jwt.verify(token,process.env.SECRET_KEY);
        console.log(verifyUser);
        const user = await Register.findOne({_id:verifyUser._id})
           
        req.token = token;
        req.user = user;

        next();
        console.log(user);

        
    } catch (error) {
        res.status(401).render("error");
        
    }

}

module.exports = auth;