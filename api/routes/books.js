const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/users");
const multer = require("multer");
//const checkAuth = require("./middleware/check-auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
  cb(null, false);
  cb(null, false);
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
const Book = require("../../models/book");

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

router.post("/", upload.single("bookimage"), (req, res, next) => {
  User.findById(req.body.userId)
    .then((user) => {
      const book = new Book({
        // _id: mongoose.Types.ObjectId(),
        author: req.body.author,
        title: req.body.title,
        owner: req.body.userId,
        // bookimage: req.file.path,
      });
      if (!book) {
        return res.status(404).json({ message: "product not found" });
      }
      return book.save();
    })

    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Book STORED",
        createdOrder: {
          _id: result._id,
          author: result.author,
          title: result.title,
          owner: result.owner,
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/books/" + result._id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:bookId", (req, res, next) => {
  Book.findById(req.params.bookId)
    .exec()
    .then((book) => {
      if (!book) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
      res.status(200).json({
        book: doc,
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
