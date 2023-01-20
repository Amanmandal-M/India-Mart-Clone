const express = require('express');
const {GetBrick,PostBrick,GetLimit,GetbyTitle,GetBrickById,GetbySortAscToDsc,GetbySortDscToAsc} = require('../Controllers/BrickController')
const BrickRouter = express.Router();

// Get
BrickRouter.get('/BricksData',GetBrick)

//Get By Id
BrickRouter.get('/Bricks/:id',GetBrickById)

// Post
BrickRouter.post("/BricksPost",PostBrick)

//Pagination
BrickRouter.get('/Brlimit',GetLimit)

//Title
BrickRouter.get("/Brtitle",GetbyTitle)

// Sort By price asc to dsc
BrickRouter.get("/Brasctodesc",GetbySortAscToDsc)

// Sort By price dsc to asc
BrickRouter.get("/Brdesctoasc",GetbySortDscToAsc)

module.exports = {BrickRouter}