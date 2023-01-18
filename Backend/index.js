const express = require('express');
const { connection } = require('./Config/db');
const { BrickRouter } = require('./Routes/BrickRouter');
const { UserRouter } = require('./Routes/UserRouter');


require('dotenv').config();

const app = express();
app.use(express.json());

app.use("/products" ,BrickRouter)
app.use("/users",UserRouter)



app.listen(process.env.PORT, async()=>{
    try {
         await connection
         console.log(`Connected to Database`);
        console.log(`PORT is running at ${process.env.PORT}`);
    } catch (error) {
        console.log(`Error in Listening : ${error}`);
    }
})