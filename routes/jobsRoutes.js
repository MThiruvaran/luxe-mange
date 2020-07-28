const express = require("express");
const router = express.Router();

const jobsSchema = require("../models/jobsModel");

router.post("/create", async (req, res) => {
  const jobInfo = new jobsSchema({
    email: req.body.email,
    hotelName: req.body.hotelName,
    contactNumber: req.body.contactNumber,
    yourPosition: req.body.yourPosition,
    address: req.body.address,
    transport: req.body.transport,
    image: req.body.image,
    description: req.body.description,
    specialities: req.body.specialities,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    experience: req.body.experience,
    date: req.body.date,
  });
  try {
    const job = await jobInfo.save();
    res.status(201).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
});

router.get("/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const job = await jobsSchema.findOne({ email: email });
    res.status(200).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
});

module.exports = router;
