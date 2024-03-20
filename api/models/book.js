const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/users"); // Import the User model

const bookSchema = new Schema(
  {
    isbn: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    //description: { type: String, required: true },
    owner: { type: mongoose.Types.ObjectId, ref: "User" }, // Reference to the User model
    publisher: { type: String, required: true },
    image: {
      type: String,
      required: true,
    },
    reviews: [
      {
        reviewer: { type: String, required: true,ref:'User' }, // Assuming reviewer is user's name
        rating: { type: Number, required: true },
        comment: { type: String }
      }
    ]
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
