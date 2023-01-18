const { ExcavatorModel } = require("../Models/ExcavatorModel");



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

module.exports = {GetExcavator,PostExcavator,UpdateExcavator,DeleteExcavator,GetLimit,GetbyTitle}