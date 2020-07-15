const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const hotelSchema = require("../models/hotelModel");

const saltRounds = 5;

router.post("/hotel", async (req, res) => {
  try {
    const hotel = await hotelSchema.findOne({ email: req.body.email });
    if (hotel) {
      return res.status(204).json({
        status: "success",
        message: "user-already-exsist",
      });
    }

    const item = new hotelSchema({
      fristName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role,
      password: bcrypt.hash(req.body.password, saltRounds, (error, result) => {
        return result;
      }),
    });

    const newhotel = await item.save();
    res.status(201).json({
      status: "success",
      data: {
        hotel: newhotel,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const hotel = await hotelSchema.findOne({ email: req.body.email });
    if (!hotel) {
      return res.status(204).json({
        status: "success",
        message: "invalid-credentials",
      });
    }

    if (
      bcrypt.compare(req.body.password, hotel.password, (error, result) => {
        return result;
      })
    ) {
      res.status(200).json({
        status: "success",
        data: {
          hotel,
        },
      });
    }
  } catch (error) {}
});

module.exports = router;
