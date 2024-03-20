require("dotenv").config();
const express = require("express");
const router = express.Router();
const Request = require("../models/request");
const Book = require("../models/book");
const User = require("../models/users");
const nodemailer = require("nodemailer");
const { default: mongoose } = require("mongoose");

// nodemailer transporter setup
const transporter = nodemailer.createTransport({
  // Configure your email service provider
  service: "gmail", // e.g., 'gmail'
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

//GET Requests
router.get("/:userId", async (req, res) => {
  //const userId=localStorage.getItem("objectId")
  console.log("req.params.userId", req.params.userId);
  const books = await Book.find({ owner: req.params.userId });
  console.log("books", books);
  const bookIds = books.map((book) => book._id);
  console.log("bookIds", bookIds);
  Request.find({ book: { $in: bookIds } })
    .populate([
      {
        path: "book",
        populate: {
          path: "owner",
          select: "_id",
        },
      },
      { path: "requester" },
    ])
    .then((requests) => {
      if (requests.length === 0) {
        return res.status(404).json({ message: "No requests found" });
      }
      res.status(200).json(requests);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

//POST request of the book
router.post("/", async (req, res) => {
  const { bookId, requester } = req.body; // Assuming owner's email is provided
  console.log("requester", requester);
  try {
    const request = new Request({
      book: bookId,
      requester: requester,
      status: "pending",
    });

    await request.save();

    // Fetch book details to get owner's information
    const book = await Book.findById(bookId)
      .select("owner title")
      .populate("owner");
    console.log(book);

    // Check if the book is found
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Send email notification to the book owner
    transporter.sendMail({
      from: "shivanichapala91@gmail.com",
      to: book.owner.mail, // Owner's email
      subject: "Book Request",
      text: `You have received a new book request for the book ${book.title}. Please check it and approve the request.`,
    });

    res.status(201).json({ message: "Request created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

//PUT request to approve a request
router.put("/:requestId/approve", async (req, res) => {
  const requester = req.params.requestId; // Extracting the requestId from params

  try {
    const requesterDetails = await Request.findById(requester).populate(
      "requester"
    );
    console.log("requesterDetails", requesterDetails);
    // Find the request by ID and update the status to "approved"
    const updatedRequest = await Request.findByIdAndUpdate(
      requester,
      { $set: { status: "approved" } },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ error: "Request not found" });
    }

    // Send email notification to the requester
    transporter.sendMail({
      from: "shivanichapala91@gmail.com",
      to: requesterDetails.requester.mail, //updatedRequest.requester.email, // Requester's email
      subject: "Request Approved",
      text: `Your request for the book has been approved.`,
    });

    res
      .status(200)
      .json({ message: "Request approved successfully", updatedRequest });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
