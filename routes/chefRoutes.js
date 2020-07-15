const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const chefSchema = require("../models/chefModel");

const saltRounds = 5;

router.post("/chef", async (req, res) => {
  try {
    const chef = await chefSchema.findOne({ email: req.body.email });
    if (chef) {
      return res.status(204).json({
        status: "success",
        message: "user-already-exsist",
      });
    }

    const item = new chefSchema({
      fristName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role,
      password: bcrypt.hash(req.body.password, saltRounds, (error, result) => {
        return result;
      }),
    });

    const newChef = await item.save();
    res.status(201).json({
      status: "success",
      data: {
        chef: newChef,
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
    const chef = await chefSchema.findOne({ email: req.body.email });
    if (!chef) {
      return res.status(204).json({
        status: "success",
        message: "invalid-credentials",
      });
    }

    if (
      bcrypt.compare(req.body.password, chef.password, (error, result) => {
        return result;
      })
    ) {
      res.status(200).json({
        status: "success",
        data: {
          chef,
        },
      });
    }
  } catch (error) {}
});

module.exports = router;
