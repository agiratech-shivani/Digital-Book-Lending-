const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const multer = require("multer");
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

const User = require("../models/users");
// handle incoming get request to /orders

router.post("/", async (req, res, next) => {
  const { name, mailId, phone, employeeId } = req.body;
  try {
    const user = await User.findOne({ employeeId: employeeId });
    if (!user) {
      await User.create({
        mail: mailId,
        name: name,
        phoneNumber: phone,
        employeeId: employeeId,
      });
    }
    res.status(200).send({ message: "inserted details successful" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "something went wrong" });
  }
});

router.get("/", (req, res, next) => {
  User.find()
    .select("name email")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            email: doc.email,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/users/" + doc._id,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: err,
      });
    });
});
// adding registration token
router.post("/addRegistrationToken/:id", async (req, res, next) => {
  const id = req.params.id;
  const { token } = req.body;

  if (!token) {
    return res.status(400).send({ message: "token is missing in the payload" });
  }

  try {
    const response = await User.findOne({ employeeId: id });
    const present = response.registeredToken.find((tok) => {
      return tok === token;
    });

    if (!present) {
      response.registeredToken.push(token);
      await response.save();
      return res.status(201).send({ message: "updated suucessfully" });
    }
    res.status(409).send({ message: " already present" });
  } catch (err) {
    res.status(500).send({ message: "internal server error" });
  }
});

// router.post("/", (req, res, next) => {
//   console.log(req.file);
//   const user = new User({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   user
//     .save()
//     .then((result) => {
//       console.log(result);
//       res.status(201).json({
//         message: " created user successfully",
//         createdUser: {
//           name: result.name,
//           email: result.email.at,
//           _id: result._id,
//           password: result.password,
//           request: {
//             type: "GET",
//             url: "http://localhost:3000/users/" + result._id,
//           },
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ err: err });
//     });
// });

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .select("name email _id")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/users/",
          },
        });
      } else {
        res.status(404).json({ message: "No Valid Entry provided" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});
// router.patch("/:userId", (req, res, next) => {
//   const id = req.params.userId;
//   const updateOps = {};
//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   User.updateOne({ _id: id }, { $set: updateOps })
//     .exec()
//     .then((result) => {
//       console.log(result);
//       res.status(200).json({
//         message: "users updated",
//         request: {
//           type: "GET",
//           url: "http://localhost:3000/users/" + id,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.delete("/:userId", (req, res, next) => {
//   const id = req.params.userId;
//   User.deleteOne({ _id: id })
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         message: {
//           message: "user deleted",
//           type: "POST",
//           url: "http://localhost:3000/users",
//           data: { name: "String", email: "String" },
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ err: err });
//     });
// });


module.exports = router;
