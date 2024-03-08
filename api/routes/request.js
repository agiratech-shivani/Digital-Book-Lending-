const express = require("express");
const router = express.Router();
const Request = require("../models/request");

router.post("/", (req, res) => {
  const { bookId } = req.body;
  const requesterId = req.body.userId; //req.user._id; // Assuming user is authenticated and user data is available in req.user

  const request = new Request({
    book: bookId,
    requester: requesterId,
    status: "pending",
  });

  request
    .save()
    .then(() => {
      res.status(201).json({ message: "Request created successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.put("/:requestId/approve", (req, res) => {
  const requesterId = req.params.requestId;

  Request.findByIdAndUpdate(
    requesterId,
    { $set: { status: "approved" } }, // Update the status to "approved"
    { new: true } // Return the updated document
  )
    .then((updatedRequest) => {
      if (!updatedRequest) {
        return res.status(404).json({ error: "Request not found" });
      }
      res
        .status(200)
        .json({ message: "Request approved successfully", updatedRequest });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.get("/", (req, res) => {
  Request.find()
    .populate("book")
    .populate("requester")
    .exec()
    .then((requests) => {
      res.status(200).json({ requests });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
