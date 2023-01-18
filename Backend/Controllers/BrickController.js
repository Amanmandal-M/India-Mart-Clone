const { BrickModel } = require("../Models/BrickModel");

const getBrick = async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(`Error in getBrick : ${error}`);
        res.send({
            "Message": "Error in getBrick : ${error}",
        })
    }
}