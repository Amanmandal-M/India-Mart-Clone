const express = require('express');
const AdminRouter = express.Router();
const {UpdateBrick,DeleteBrick,UpdateExcavator,DeleteExcavator,UserData} = require('../Controllers/AdminController')
require('dotenv').config();

AdminRouter.post('/check',(req,res)=>{
    const {UserName , Password} = req.body
    if(UserName===process.env.Name && Password===process.env.Password){
        res.send({
            "Message":"Able",
            "Status":200
        })
    }else{
        res.send("You are not Authorized")
    }   
})


// Get Data Of Users
AdminRouter.get("/UsersData",UserData)


// Update
AdminRouter.patch("/Brupdate/:id",UpdateBrick)

// Delete
AdminRouter.delete("/Brdelete/:id",DeleteBrick)


// Update
AdminRouter.patch("/Exupdate/:id",UpdateExcavator)

// Delete
AdminRouter.delete("/Exdelete/:id",DeleteExcavator)






module.exports = {AdminRouter}