const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/users");
const Book = require("../models/book");

const reviewSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  reviewer: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
