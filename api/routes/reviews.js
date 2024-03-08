const express = require("express");
const router = express.Router();
const Review = require("../models/review");

// Create a Review
router.post("/", (req, res) => {
  const { bookTitle, rating, comment } = req.body;
  const reviewerId = req.body.userId; //req.user._id; // Assuming user is authenticated and user data is available in req.user

  const review = new Review({
    bookTitle: bookTitle,
    reviewer: reviewerId,
    rating,
    comment,
  });

  review
    .save()
    .then(() => {
      res.status(201).json({ message: "Review created successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });  //test
    });
});

// Get Reviews for a Book
router.get("/:bookId", (req, res) => {
  const bookId = req.params.bookId;

  Review.find({ book: bookId })
    .populate("reviewer")
    .exec()
    .then((reviews) => {
      res.status(200).json({ reviews });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
