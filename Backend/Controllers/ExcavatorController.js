const { ExcavatorModel } = require("../Models/ExcavatorModel");


// Get All Data
const GetExcavator = async (req,res)=>{
    try {
        const data = await ExcavatorModel.find();
        res.send(data);
    } catch (error) {
        console.log(`Error in GetExcavator : ${error}`);
        res.send({
            "Message": "Error in GetExcavator : ${error}",
        })
    }
}

// Get Data by Id
const GetExcavatorById = async (req, res) => {
    const ID = req.params.id
    try {
        if(ID){
            const data = await ExcavatorModel.find({_id: ID});
            res.send(data);
        }else{
            const data = await ExcavatorModel.find();
            res.send(data);
        }
    } catch (error) {
        console.log(`Error in GetExcavatorById : ${error}`);
        res.send({
            "Message": "Error in GetExcavatorById : ${error}",
        })
    }
}

// Post Data
const PostExcavator = async (req, res) => {
    try {
        const Excavator = ExcavatorModel.insertMany(req.body);
        // await Excavator.save();
        res.send({
            "Message":"Product Added Successfully"
        });
    } catch (error) {
        console.log(`Error in PostExcavator : ${error}`);
        res.send({
            "Message": "Error in PostExcavator : ${error}",
        })
    }
}

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


const GetLimit = async (req, res) => {
    const query = req.query.limit
    try {
        const data = await ExcavatorModel.find().limit(query)
        if(data.length > 0) {
            res.send(data);
        }else{
            res.send({
                "Message": "Limit is not available"
            })
        }
    } catch (error) {
        console.log(`Error in LimitExcavator : ${error}`);
        res.send({
            "Message": "Error in LimitExcavator : ${error}",
        })
    }
}

// Get by Title 
const GetbyTitle = async (req, res) => {
    const query = req.query.q
    try {
        const data = await ExcavatorModel.find({Title: {$regex:`(?i)${query}`}})
        if(data.length>0){
            res.send(data);
        }else{
            res.send({
                "Message":"Data not found"
            })
        }
    } catch (error) {
        console.log(`Error in TitleExcavator : ${error}`);
        res.send({
            "Message": "Error in TitleExcavator : ${error}",
        })
    }
}

// Sorting asc to desc
const GetbySortAscToDsc = async (req, res) => {
    try {
        const data = await ExcavatorModel.find().sort({Price:1})
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
        const data = await ExcavatorModel.find().sort({Price:-1})
        res.send(data);
    } catch (error) {
        console.log(`Error in GetbySortDscToAsc : ${error}`);
        res.send({
            "Message": "Error in GetbySortDscToAsc : ${error}",
        })
    }
}
module.exports = {GetExcavator,GetExcavatorById,PostExcavator,UpdateExcavator,DeleteExcavator,GetLimit,GetbyTitle,GetbySortAscToDsc,GetbySortDscToAsc}