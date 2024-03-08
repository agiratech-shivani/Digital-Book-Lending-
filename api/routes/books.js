const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users");
const Book = require("../models/book");
//const multer = require("multer");
const axios = require("axios");
// const fetch = require("node-fetch");

//const axios = require("axios");
//const checkAuth = require("./middleware/check-auth");

//Handling incoming GET requests to /orders
router.get("/", (req, res, next) => {
  Book.find()
    .populate("owner", "name")
    //.select("author title owner")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        book: docs.map((doc) => {
          return {
            _id: doc._id,
            author: doc.author,
            owner: doc.owner,
            title: doc.title,
            bookimage: doc.bookimage,
            request: {
              type: "GET",
              url: "http://localhost:3000/books/" + doc._id,
            },
          };
        }),
      });
    })
    .catch((err) => {
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
    const { isbn } = req.body;
    console.log(isbn, req.body);
    // Fetch book details using ISBN from an online database
    const bookInfo = await fetchBookDetails(isbn);

    if (!bookInfo) {
      return res
        .status(404)
        .json({ message: "Book details not found for the provided ISBN" });
    }

    // Create a new Book instance with retrieved details
    const book = new Book({
      title: bookInfo.title,
      author: bookInfo.author,
      isbn: isbn,
      owner: "65e953bfa5fe77491fa91eac",
      publisher: bookInfo.publisher,
      // Add more properties as needed
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

// router.post("/", upload.single("bookimage"), (req, res, next) => {
//   User.findById(req.body.userId)
//     .then((user) => {
//       const book = new Book({
//         // _id: mongoose.Types.ObjectId(),
//         author: req.body.author,
//         title: req.body.title,
//         owner: req.body.userId,
//         // bookimage: req.file.path,
//       });
//       if (!book) {
//         return res.status(404).json({ message: "product not found" });
//       }
//       return book.save();
//     })

//     .then((result) => {
//       console.log(result);
//       res.status(201).json({
//         message: "Book STORED",
//         createdOrder: {
//           _id: result._id,
//           author: result.author,
//           title: result.title,
//           owner: result.owner,
//         },
//         request: {
//           type: "GET",
//           url: "http://localhost:3000/books/" + result._id,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.get("/:bookId", (req, res, next) => {
//   Book.findById(req.params.bookId)
//     .exec()
//     .then((book) => {
//       if (!book) {
//         return res.status(404).json({
//           message: "Book not found",
//         });
//       }
//       res.status(200).json({
//         book: doc,
//         request: {
//           type: "GET",
//           url: "http://localhost:3000/books",
//         },
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "err" });
//     });
// });

router.get("/:ownerId", async (req, res) => {
  try {
    const ownerId = req.params.ownerId;

    // Retrieve books owned by the specified user from the database
    const books = await Book.find({ owner: ownerId });

    if (books.length === 0) {
      return res
        .status(404)
        .json({ message: "No books found for the specified owner" });
    }

    res.status(200).json({ books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.patch("/:bookId", (req, res, next) => {
  res.status(200).json({
    message: "updated book",
  });
});

router.delete("/:bookId", (req, res, next) => {
  Book.deleteOne({ _id: req.params.bookId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Book Deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/books",
          body: { userId: "ID", author: "String", title: "String" },
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
