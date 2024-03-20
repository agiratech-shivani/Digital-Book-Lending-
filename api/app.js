require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const router = express.Router();
const nodemailer = require('nodemailer');

const cors = require("cors");


const User = require("./models/users");

const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/user");
const requestRoutes = require("./routes/request");


mongoose.connect("mongodb://localhost:27017/Digital-Book-lending");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// nodemailer transporter setup
const transporter = nodemailer.createTransport({
  // Configure your email service provider
  service: 'gmail', // e.g., 'gmail'
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  }
});

//routes which handle request
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/requests", requestRoutes);
//app.use("/:requestId/approve",requestRoutes);


app.use((req, res, next) => {
  const error = new Error("not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});

module.exports = router;
