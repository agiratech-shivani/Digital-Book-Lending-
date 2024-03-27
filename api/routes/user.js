const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users");
const userController = require('../controllers/userController')




router.post("/",userController.createUser);


router.get('/', userController.getAllUsers);




module.exports = router;
