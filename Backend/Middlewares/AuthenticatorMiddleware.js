require('dotenv').config();

const validator = (req,res,next)=>{
    const {UserName , Password} = req.body
    if(UserName===process.env.Name && Password===process.env.Password){
        next();
    }else{
        res.send("You are not Authorized")
    }
}

module.exports = {validator}