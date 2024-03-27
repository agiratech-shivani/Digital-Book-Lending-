const express = require("express");
const router = express.Router();

const bookController = require('../controllers/bookController')




router.get('/', bookController.getBooks);

router.post('/', bookController.addBook);

router.post("/:bookId/reviews", bookController.addReview);


router.get("/:bookId", bookController.getBookById);
  




module.exports = router;
