const express = require('express');
const {GetExcavator,PostExcavator,UpdateExcavator,DeleteExcavator,GetLimit,GetbyTitle} = require('../Controllers/BrickController')
const ExcavatorRouter = express.Router();

// Get
BrickRouter.get('/ExcavatorData',GetExcavator)

// Post
BrickRouter.post("/ExcavatorPost",PostExcavator)

// Update
BrickRouter.patch("/update/:id",UpdateExcavator)

// Delete
BrickRouter.delete("/delete/:id",DeleteExcavator)

//Pagination
BrickRouter.get('/limit',GetLimit)

//Title
BrickRouter.get("/title",GetbyTitle)

module.exports = {ExcavatorRouter}