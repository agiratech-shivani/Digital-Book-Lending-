const Request = require("../models/request");
const Book = require("../models/book");
const User = require("../models/users");
// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");// nodemailer transporter setup


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

//GET Requests
exports.getRequestsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const books = await Book.find({ owner: userId });
    const bookIds = books.map((book) => book._id);
    const requests = await Request.find({ book: { $in: bookIds }, status: req.query.status })
      .populate([
        {
          path: "book",
          populate: {
            path: "owner",
            select: "_id",
          },
        },
        { path: "requester" },
      ]);
    res.status(200).json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//POST request of the book
exports.createRequest = async (req, res) => {
  try {
    const { bookId, requester } = req.body;
    const request = new Request({
      book: bookId,
      requester: requester,
      status: "pending",
    });
    await request.save();
    const book = await Book.findById(bookId).select("owner title").populate("owner");
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    transporter.sendMail({
      from: "shivanichapala91@gmail.com",
      to: book.owner.mail,
      subject: "Book Request",
      text: `You have received a new book request for the book ${book.title}. Please check it and approve the request.`,
    });
    res.status(201).json({ message: "Request created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//PUT request to approve a request
exports.approveRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const requesterDetails = await Request.findById(requestId).populate(["requester", "book"]);
    const updatedRequest = await Request.findByIdAndUpdate(
      requestId,
      { $set: { status: req.body.status } },
      { new: true }
    );
    if (!updatedRequest) {
      return res.status(404).json({ error: "Request not found" });
    }
    if (req.body.status === "approved" || req.body.status === "rejected") {
      transporter.sendMail({
        from: "shivanichapala91@gmail.com",
        to: requesterDetails.requester.mail,
        subject: req.body.status === "approved" ? "Request Approved" : "Request Rejected",
        text: req.body.status === "approved" ?
          `Your request for the book "${requesterDetails.book.title}" has been approved.` :
          `Your request for the book "${requesterDetails.book.title}" has been rejected.`,
      });
    }
    res.status(200).json({ message: "Request status updated successfully", updatedRequest });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};


