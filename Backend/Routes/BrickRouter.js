const express = require('express');
const {GetBrick,PostBrick} = require('../Controllers/BrickController')
const BrickRouter = express.Router();


BrickRouter.get('/BricksData',GetBrick)

BrickRouter.post("/BricksPost",PostBrick)


module.exports = {BrickRouter}