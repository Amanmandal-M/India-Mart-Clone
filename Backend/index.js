const express = require('express');
const { connection } = require('./Config/db');

require('dotenv').config();

const app = express();
app.use(express.json());

// app.use()


app.listen(process.env.PORT, async ()=>{
    try {
        connection
        console.log(`Connected to Database`);
        console.log(`PORT is running at ${process.env.PORT}`);
    } catch (error) {
        console.log(`Error in Listening : ${error}`);
    }
})