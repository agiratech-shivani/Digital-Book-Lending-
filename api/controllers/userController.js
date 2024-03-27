const mongoose = require("mongoose");
const User = require("../models/users");


//POST request to create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, mailId, phone, employeeId } = req.body;
    const existingUser = await User.findOne({ employeeId });
    if (!existingUser) {
      const newUser = await User.create({
        mail: mailId,
        name: name,
        phoneNumber: phone,
        employeeId: employeeId,
      });
      console.log(newUser);
      res.status(200).send({ message: "Inserted details successfully", response: newUser });
    } else {
      res.status(200).send({ message: "User with the same employee ID already exists",response: existingUser });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Something went wrong" });
  }
};

//GET request to fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    const response = {
      count: users.length,
      users: users.map((user) => {
        return {
          name: user.name,
          mail: user.mail,
          phoneNumber:user.phoneNumber,
          employeeId:user.employeeId,
          _id: user._id,

          
        };
      }),
    };
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

