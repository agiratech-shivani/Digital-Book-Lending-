require("dotenv").config();
const express = require("express");
const router = express.Router();
// const Request = require("../models/request");
// const Book = require("../models/book");
// const User = require("../models/users");
// const nodemailer = require("nodemailer");
const requestController = require('../controllers/requestController')
// const { default: mongoose } = require("mongoose");

// nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//   service: "gmail", // e.g., 'gmail'
//   auth: {
//     user: process.env.NODEMAILER_USER,
//     pass: process.env.NODEMAILER_PASS,
//   },
// });


router.get("/:userId", requestController.getRequestsByUserId);

router.post("/", requestController.createRequest);

router.put("/:requestId/approve", requestController.approveRequest);







module.exports = router;
