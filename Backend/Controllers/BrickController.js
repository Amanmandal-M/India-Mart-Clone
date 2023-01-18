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
        res.send({
            "Message":"Product Added Successfully"
        });
    } catch (error) {
        console.log(`Error in PostBrick : ${error}`);
        res.send({
            "Message": "Error in PostBrick : ${error}",
        })
    }
}

const UpdateBrick = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try {
        const data = await BrickModel.findByIdAndUpdate({_id:ID}, payload)
        res.send({
            "Message":"Data updated successfully"
        })
    } catch (error) {
        console.log(`Error in UpdateBrick : ${error}`);
        res.send({
            "Message": "Error in UpdateBrick : ${error}",
        })
    }
}


const DeleteBrick = async (req, res) => {
    const ID = req.params.id;
    try {
        const data = await BrickModel.findByIdAndDelete({_id:ID})
        res.send({
            "Message":"Data Deleted successfully"
        })
    } catch (error) {
        console.log(`Error in DeleteBrick : ${error}`);
        res.send({
            "Message": "Error in DeleteBrick : ${error}",
        })
    }
}


module.exports = {GetBrick,PostBrick,UpdateBrick,DeleteBrick,GetLimit}