const Book = require("../models/book");
const User = require('../models/users')
const mongoose = require("mongoose");

// Handle GET requests for fetching books
exports.getBooks = async (req, res, next) => {
    try {
        const books = await Book.find({ owner: { $ne: req.query.userId } }).populate("owner");
        res.status(200).json({
            count: books.length,
            books: books.map(book => {
                return {
                    _id: book._id,
                    author: book.author,
                    owner: book.owner ? book.owner.name : "",
                    title: book.title,
                    image: book.image,
                    
                };
            })
        });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

async function fetchBookDetails(isbn) {
    // Validate ISBN format
    const isbnRegex =
      /^(?:ISBN(?:-13)?:?\s*)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-\s]){3})[-\s0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[-\s]){4})[-\s0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
  
    if (!isbnRegex.test(isbn)) {
      throw new Error("Invalid ISBN number, please enter a valid ISBN number ");
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
  


// Handle POST requests for adding a new book
exports.addBook = async (req, res, next) => {
    try {
        const { isbn, userId } = req.body;
        // Fetch book details using ISBN from an online database
        const bookInfo = await fetchBookDetails(isbn);

        if (!bookInfo) {
            return res.status(404).json({ message: "Book details not found for the provided ISBN" });
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
            owner: user._id,
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
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Handle POST requests for adding a review to a book
exports.addReview = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.bookId).populate("owner");
        if (!book) {
          return res.status(404).json({ message: "Book not found" });
        }
    
        const { reviewer, rating, comment } = req.body;
        const review = {
          reviewer,
          rating,
          comment,
        };
    
        book.reviews.push(review);
        await book.save();
    
        if (book.reviews.length === 0) {
          return res.status(404).json({ message: "No reviews for this book" });
        }
    
        res.status(201).json({
          message: "Review added successfully",
          review,
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
   
};

// Handle GET requests for fetching a book by ID
exports.getBookById = async (req, res, next) => {
    // Your logic for fetching a book by ID
    try{

        await Book.findById(req.params.bookId)
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
            
          });
        })
    }
    catch(err) {
      res.status(500).json({ error: "err" });
    };
//});
};
