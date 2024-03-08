const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/users");
const Book = require("../models/book");

const requestSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  requester: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

module.exports = mongoose.model("Request", requestSchema);
