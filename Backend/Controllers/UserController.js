const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel} = require("../Models/UserModel")
require('dotenv').config();


// New User When Register

const registerUser = async (req, res) => {
    try {
      const { Username, EmailId, Password, DateOfBirth, ContactNumber, Location } = req.body;
    const datas = await UserModel.find({ EmailId: EmailId });
    if(datas.length != 0){
      res.send({
        "Message":"User Already Registered",
        "Status": 400
      })
    }else{
      bcrypt.hash(Password, 5, async (err, secure_password) => {
        if (err) {
          res.send({
              "Message" : `Error in hashing : ${err}`
          })
          console.log(err + `Error in bcrypt`);
        } else {
            const user = new UserModel({
              Username,
              EmailId,
              Password: secure_password,
              DateOfBirth,
              ContactNumber,
              Location,
            });
          await user.save();
          res.send({
            "Message": "Successfully Registered",
            "Status": 200
          });
        }
      });
    }

    } catch (error) {
      console.log(`Error in /register : ${error}`);
      res.send({
        "Error in /register": `${error}`,
      });
    }
}

// While Login 

const loginUser = async (req, res) => {
    const { EmailId, Password } = req.body;
    try {
      const userData = await UserModel.find({ EmailId });
  
      if (userData.length > 0) {
        bcrypt.compare(Password, userData[0].Password, (err, result) => {
          if (result) {
            const token = jwt.sign({ UserID: userData[0]._id }, process.env.key ,{expiresIn:"4h"});
            res.send({
              "Message": "Login successful",
              "Token": token,
              "Data":userData
            });

          } else {
            res.send("Wrong Credentials");
          }
        });
      } else {
        res.send({
            "Message": "Login failed"
        });
      }
    } catch (error) {
      res.send("Something went wrong");
      console.log("Error: " + error);
    }
}


module.exports = {registerUser,loginUser}