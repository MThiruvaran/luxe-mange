const express = require("express");
const router = express.Router();

const chefInfoSchema = require("../models/chefInfoModel");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/create", upload.single("image"), async (req, res) => {
  const image = req.file.buffer.toString("base64");
  const newChefInfo = new chefInfoSchema({
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    yourPosition: req.body.yourPosition,
    gender: req.body.gender,
    dob: req.body.dob,
    address: req.body.address,
    transport: req.body.transport,
    image: image,
    description: req.body.description,
    specialities: req.body.specialities,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    experience: req.body.experience,
    referal: req.body.referal,
    terms: req.body.terms,
  });
  try {
    const chef = await newChefInfo.save();
    res.status(201).json({
      status: "success",
      data: {
        chef,
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
    const chef = await chefInfoSchema.findOne({ email: email });
    res.status(200).json({
      status: "success",
      data: {
        chef,
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
