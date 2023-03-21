const { BrickModel } = require("../Models/BrickModel");
const { ExcavatorModel } = require("../Models/ExcavatorModel");
const { UserModel } = require("../Models/UserModel");




// ****************Brick****************************

// Update Data by Id
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

// Delete Data by Id
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






// ****************Excavator****************************

// Update Data by Id
const UpdateExcavator = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try {
        const data = await ExcavatorModel.findByIdAndUpdate({_id:ID}, payload)
        res.send({
            "Message":"Data updated successfully"
        })
    } catch (error) {
        console.log(`Error in UpdateExcavator : ${error}`);
        res.send({
            "Message": "Error in UpdateExcavator : ${error}",
        })
    }
}

// Delete Data by Id
const DeleteExcavator = async (req, res) => {
    const ID = req.params.id;
    try {
        const data = await ExcavatorModel.findByIdAndDelete({_id:ID})
        res.send({
            "Message":"Data Deleted successfully"
        })
    } catch (error) {
        console.log(`Error in DeleteExcavator : ${error}`);
        res.send({
            "Message": "Error in DeleteExcavator : ${error}",
        })
    }
}


// ****************Users****************************


const UserData = async (req, res) => {
    try {
        const data = await UserModel.find();
        res.send(data);
    } catch (error) {
        console.log(`Error in UserData : ${error}`);
        res.send({
            "Message": "Error in UserData : ${error}",
        })
    }
}


module.exports={UpdateBrick,DeleteBrick,UpdateExcavator,DeleteExcavator,UserData}