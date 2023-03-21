const express = require('express');
const app = express();

const cors = require('cors');
require('dotenv').config();

// Routers and Mongoose Connectors

const { connection } = require('./Config/db');
const { validator } = require('./Middlewares/AuthenticatorMiddleware');
const { AdminRouter } = require('./Routes/AdminRoute');
const { BrickRouter } = require('./Routes/BrickRouter');
const { ExcavatorRouter } = require('./Routes/ExcavatorRouter');
const { UserRouter } = require('./Routes/UserRouter');
const { CartRouter } = require('./Routes/CartRoute');




// Calling Routers & converting data to json 

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Welcome in My Project Api")
})

app.use("/products" ,BrickRouter)
app.use("/products" ,ExcavatorRouter)
app.use("/users",UserRouter)
app.use(CartRouter);
app.use(validator);
app.use("/admin",AdminRouter)




// Listening

app.listen(process.env.PORT, async()=>{
    try {
         await connection
         console.log(`Connected to Database`);
        console.log(`PORT is running at ${process.env.PORT}`);
    } catch (error) {
        console.log(`Error in Listening : ${error}`);
    }
})