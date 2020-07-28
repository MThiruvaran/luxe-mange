const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const chefSchema = require("../models/chefModel");

const saltRounds = 5;

router.post("/register", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const role = req.body.role;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, saltRounds);

  try {
    const chef = await chefSchema.findOne({ email: email });
    if (chef) {
      return res.status(204).json({
        status: "success",
        message: "user-already-exsist",
      });
    }

    const item = new chefSchema({
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      password: password,
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

    if (bcrypt.compareSync(req.body.password, chef.password)) {
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
