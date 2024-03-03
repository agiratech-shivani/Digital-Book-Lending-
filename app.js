const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const router = express.Router();
const morgan = require("morgan");

const User = require("./models/users");

const bookRoutes = require("./api/routes/books");
const userRoutes = require("./api/routes/user");
const reviewRoutes = require("./api/routes/reviews");
const requestRoutes = require("./api/routes/request");

mongoose.connect("mongodb://localhost:27017/Digital-Book-lending");
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin,X-Requested-Width, Content-Type, Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Acess-Control-Allow-Methods", "PUT,POST,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});

//routes which handle request
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/requests", requestRoutes);
app.use("/reviews", reviewRoutes);

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
