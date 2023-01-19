const { BrickModel } = require("../Models/BrickModel");


// Get All Data
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

// Get Data by Id
const GetBrickById = async (req, res) => {
    const ID = req.params.id
    console.log(ID);
    try {
        if(ID){
            const data = await BrickModel.find({_id: ID});
            res.send(data);
        }else{
            const data = await BrickModel.find();
            res.send(data);
        }
    } catch (error) {
        console.log(`Error in GetBrickById : ${error}`);
        res.send({
            "Message": "Error in GetBrickById : ${error}",
        })
    }
}

// Post Data
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

// Pagination
const GetLimit = async (req, res) => {
    const query = req.query.limit
    try {
        const data = await BrickModel.find().limit(query)
        if(data.length > 0) {
            res.send(data);
        }else{
            res.send({
                "Message": "Limit is not available"
            })
        }
    } catch (error) {
        console.log(`Error in LimitBrick : ${error}`);
        res.send({
            "Message": "Error in LimitBrick : ${error}",
        })
    }
}

// Get by Title 
const GetbyTitle = async (req, res) => {
    const query = req.query.q
    try {
        const data = await BrickModel.find({Title: {$regex:`(?i)${query}`}})
        if(data.length>0){
            res.send(data);
        }else{
            res.send({
                "Message":"Data not found"
            })
        }
    } catch (error) {
        console.log(`Error in TitleBrick : ${error}`);
        res.send({
            "Message": "Error in TitleBrick : ${error}",
        })
    }
}

// Sorting asc to desc
const GetbySortAscToDsc = async (req, res) => {
    try {
        const data = await BrickModel.find().sort({Price:1})
        res.send(data);
    } catch (error) {
        console.log(`Error in GetbySortAscToDsc : ${error}`);
        res.send({
            "Message": "Error in GetbySortAscToDsc : ${error}",
        })
    }
}

// Sorting desc to asc
const GetbySortDscToAsc = async (req, res) => {
    try {
        const data = await BrickModel.find().sort({Price:-1})
        res.send(data);
    } catch (error) {
        console.log(`Error in GetbySortDscToAsc : ${error}`);
        res.send({
            "Message": "Error in GetbySortDscToAsc : ${error}",
        })
    }
}

module.exports = {GetBrick,PostBrick,UpdateBrick,DeleteBrick,GetLimit,GetbyTitle,GetBrickById,GetbySortAscToDsc,GetbySortDscToAsc}