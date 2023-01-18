const express = require('express');
const {GetExcavator,GetExcavatorById,PostExcavator,UpdateExcavator,DeleteExcavator,GetLimit,GetbyTitle} = require('../Controllers/ExcavatorController')
const ExcavatorRouter = express.Router();

// Get
ExcavatorRouter.get('/ExcavatorData',GetExcavator)

//Get By Id
BrickRouter.get('/Bricks/:id',GetExcavatorById)

// Post
ExcavatorRouter.post("/ExcavatorPost",PostExcavator)

// Update
ExcavatorRouter.patch("/Exupdate/:id",UpdateExcavator)

// Delete
ExcavatorRouter.delete("/Exdelete/:id",DeleteExcavator)

//Pagination
ExcavatorRouter.get('/Exlimit',GetLimit)

//Title
ExcavatorRouter.get("/Extitle",GetbyTitle)

module.exports = {ExcavatorRouter}