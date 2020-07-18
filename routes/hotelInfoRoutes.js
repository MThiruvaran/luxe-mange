const express = require("express");
const router = express.Router();

const hotelInfoSchema = require("../models/hotelInfoModel");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.post("/create", upload.single("image"), async (req, res) => {
  const image = req.file.buffer.toString("base64");
  const newHotelInfo = new hotelInfoSchema({
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    yourPosition: req.body.yourPosition,
    siteName: req.body.siteName,
    siteContactNumber: req.body.siteContactNumber,
    accomodation: req.body.accomodation,
    numberOfStaff: req.body.numberOfStaff,
    address: req.body.address,
    image: image,
    description: req.body.description,
    specialities: req.body.specialities,
    siteLink: req.body.siteLink,
    fbLink: req.body.fbLink,
    twitterLink: req.body.twitterLink,
    tripAdvisorLink: req.body.tripAdvisorLink,
    greatAbout: req.body.greatAbout,
    referal: req.body.referal,
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    vat: req.body.vat,
    contactName: req.body.contactName,
    accountPosition: req.body.accountPosition,
    accountEmail: req.body.accountEmail,
    terms: req.body.terms,
  });
  try {
    const hotel = await newHotelInfo.save();
    res.status(201).json({
      status: "success",
      data: {
        hotel,
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
    const hotel = await hotelInfoSchema.findOne({ email: email });
    res.status(200).json({
      status: "success",
      data: {
        hotel,
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
