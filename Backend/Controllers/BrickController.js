const { BrickModel } = require("../Models/BrickModel");




const GetBrick = async (req,res)=>{
    try {
        const data = await BrickModel.find();
        res.send(data);
    } catch (error) {
        console.log(`Error in GetBrick : ${error}`);
        res.send({
            "Message": "Error in GetBrick : ${error}",
        })
    }
}


const PostBrick = async (req, res) => {
    try {
        const brick = new BrickModel(req.body);
        await brick.save();
        res.send("Product Added Successfully");
    } catch (error) {
        console.log(`Error in PostBrick : ${error}`);
        res.send({
            "Message": "Error in PostBrick : ${error}",
        })
    }
}


module.exports = {GetBrick,PostBrick}