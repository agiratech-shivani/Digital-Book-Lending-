const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/users"); // Import the User model

const bookSchema = new Schema(
  {
    //isbn: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    //description: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
    //bookimage: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
