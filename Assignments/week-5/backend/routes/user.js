// signup, signin, create-todo, update-todo, mark-todo, delete-todo, show-todo-of-user

const express = require("express");
const { UserModel, TodoModel } = require("../db/index.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validateInputs = require("../middleware/inputvalidations.js");

const router = express.Router();

// Signup
router.post("/signup", validateInputs, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const findEmail = await UserModel.findOne({ email });

    if (findEmail) {
      return res.status(400).json({
        message: "User with this email is already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User Signed Up Successfully...",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
