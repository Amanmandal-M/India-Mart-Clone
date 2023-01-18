const express = require('express');
const {GetExcavator,PostExcavator,UpdateExcavator,DeleteExcavator,GetLimit,GetbyTitle} = require('../Controllers/ExcavatorController')
const ExcavatorRouter = express.Router();

// Get
ExcavatorRouter.get('/ExcavatorData',GetExcavator)

// Post
ExcavatorRouter.post("/ExcavatorPost",PostExcavator)

// Update
ExcavatorRouter.patch("/update/:id",UpdateExcavator)

// Delete
ExcavatorRouter.delete("/delete/:id",DeleteExcavator)

//Pagination
ExcavatorRouter.get('/limit',GetLimit)

//Title
ExcavatorRouter.get("/title",GetbyTitle)

module.exports = {ExcavatorRouter}