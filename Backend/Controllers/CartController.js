const { CartModel } = require("../Models/CartModel");

const PostCart = async (req,res)=>{
    try {
        const Cart = new CartModel(req.body)
        await Cart.save();
        res.status(200).send({
            "Message": "Added to Cart successfully"
        });
    } catch (error) {
        console.log(`Error in Cart: ${error}`);
        res.status(404).send({
            "Message": error
        });
    }
}


const DeleteCart = async (req, res) => {
    try {
        const data = await CartModel.findByIdAndDelete({_id:req.params.id})
        res.status(200).send({
            "Message":"Product Removed successfully"
        })
    } catch (error) {
        console.log(`Error in DeleteCart : ${error}`);
        res.status(404).send({
            "Message": "Error in DeleteCart : ${error}",
        })
    }
}


module.exports = { PostCart , DeleteCart }