const express = require('express');
const {GetBrick,PostBrick,UpdateBrick,DeleteBrick,GetLimit,GetbyTitle} = require('../Controllers/BrickController')
const BrickRouter = express.Router();

// Get
BrickRouter.get('/BricksData',GetBrick)

// Post
BrickRouter.post("/BricksPost",PostBrick)

// Update
BrickRouter.patch("/update/:id",UpdateBrick)

// Delete
BrickRouter.delete("/delete/:id",DeleteBrick)

//Pagination
BrickRouter.get('/limit',GetLimit)

//Title

BrickRouter.get("/title",GetbyTitle)

module.exports = {BrickRouter}