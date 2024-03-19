const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users");
const Book = require("../models/book");
const axios = require("axios");

//Handling incoming GET requests to /books
router.get("/", (req, res, next) => {
  Book.find()
    .populate("owner")
    //.populate("owner", "author")
    //.select(" title owner")
    // .lean()
    .then((docs) => {
      console.log("docs", docs);
      res.status(200).json({
        count: docs.length,
        book: docs.map((doc) => {
          console.log("doc.name", doc);
          return {
            _id: doc._id,
            author: doc.author,
            owner: doc.owner ? doc.owner.name : "",
            title: doc.title,
            image: doc.image,
            // publisher: doc.publisher,
            request: {
              type: "GET",
              url: "http://localhost:3000/books/" + doc._id,
            },
          };
        }),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

async function fetchBookDetails(isbn) {
  // Validate ISBN format
  const isbnRegex =
    /^(?:ISBN(?:-13)?:?\s*)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-\s]){3})[-\s0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[-\s]){4})[-\s0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;

  if (!isbnRegex.test(isbn)) {
    throw new Error("Invalid ISBN number");
  }

  try {
    console.log(isbn);
    // Fetch book details using ISBN from an online database (e.g., Google Books API)
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
    );
    const data = await response.json();
    console.log(data);

    // Check if any items were returned in the response
    if (data.items && data.items.length > 0) {
      // Extract book information from the response
      const bookInfo = data.items[0].volumeInfo;

      // Construct an object containing relevant book details
      const bookDetails = {
        title: bookInfo.title,
        author: bookInfo.authors
          ? bookInfo.authors.join(", ")
          : "Unknown Author",
        publisher: bookInfo.publisher || "Unknown Publisher",
        imageLink: bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : null,
        //description: bookInfo.description || "No description available",

        // Add more details as needed
      };

      return bookDetails;
    } else {
      // If no book details were found for the provided ISBN, return null
      return null;
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw error;
  }
}

router.post("/", async (req, res) => {
  try {
    const { isbn, userId } = req.body;
    console.log(isbn, req.body);
    // Fetch book details using ISBN from an online database
    const bookInfo = await fetchBookDetails(isbn);

    if (!bookInfo) {
      return res
        .status(404)
        .json({ message: "Book details not found for the provided ISBN" });
    }

    // Fetch user details using ownerId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new Book instance with retrieved details
    const book = new Book({
      title: bookInfo.title,
      author: bookInfo.author,
      isbn: isbn,
      owner: user._id, //"60af9c28-eb6b-475a-a342-0533a88b0052",
      //ownedBy: user.name,
      publisher: bookInfo.publisher,
      image: bookInfo.imageLink,
    });

    // Save the book to the database
    const savedBook = await book.save();

    // Return the response
    res.status(201).json({
      message: "Book stored successfully",
      book: savedBook,
    });
  } catch (error) {
    if (error.message === "Invalid ISBN number") {
      return res.status(400).json({ error: "Invalid ISBN number" });
    }
    console.error("Error adding book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Adding review for book
router.post("/:bookId/reviews", async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.bookId).populate("owner");
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    const reviewer = owner.name;
    const { rating, comment } = req.body;
    const review = {
      reviewer,
      rating,
      comment,
    };

    book.reviews.push(review);
    await book.save();

    res.status(201).json({
      message: "Review added successfully",
      review,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//GET book details by id
router.get("/:bookId", (req, res, next) => {
  Book.findById(req.params.bookId)
    .populate("owner")
    .exec()
    .then((book) => {
      if (!book) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
      res.status(200).json({
        book: book,
        request: {
          type: "GET",
          url: "http://localhost:3000/books",
        },
      });
    })
    .catch((err) => {
      res.status(500).json({ error: "err" });
    });
});

module.exports = router;
