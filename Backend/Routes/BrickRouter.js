const express = require('express');
const {GetBrick,PostBrick,UpdateBrick,DeleteBrick,GetLimit,GetbyTitle} = require('../Controllers/BrickController')
const BrickRouter = express.Router();

// Get
BrickRouter.get('/BricksData',GetBrick)

// Post
BrickRouter.post("/BricksPost",PostBrick)

// Update
BrickRouter.patch("/Brupdate/:id",UpdateBrick)

// Delete
BrickRouter.delete("/Brdelete/:id",DeleteBrick)

//Pagination
BrickRouter.get('/Brlimit',GetLimit)

//Title

BrickRouter.get("/Brtitle",GetbyTitle)

module.exports = {BrickRouter}