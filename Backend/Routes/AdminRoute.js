const express = require('express');
const AdminRouter = express.Router();
const {UpdateBrick,DeleteBrick,UpdateExcavator,DeleteExcavator,UserData} = require('../Controllers/AdminControl')

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