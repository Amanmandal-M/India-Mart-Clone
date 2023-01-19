const express = require('express');
const {GetBrick,PostBrick,UpdateBrick,DeleteBrick,GetLimit,GetbyTitle,GetBrickById} = require('../Controllers/BrickController')
const BrickRouter = express.Router();

// Get
BrickRouter.get('/BricksData',GetBrick)

//Get By Id
BrickRouter.get('/Bricks/:id',GetBrickById)

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