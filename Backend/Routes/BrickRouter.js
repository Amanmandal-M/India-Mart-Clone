const express = require('express');
const {GetBrick,PostBrick,UpdateBrick,DeleteBrick} = require('../Controllers/BrickController')
const BrickRouter = express.Router();

// Get
BrickRouter.get('/BricksData',GetBrick)

// Post
BrickRouter.post("/BricksPost",PostBrick)

// Update
BrickRouter.patch("/update/:id",UpdateBrick)

// Delete
BrickRouter.delete("/delete/:id",DeleteBrick)


module.exports = {BrickRouter}