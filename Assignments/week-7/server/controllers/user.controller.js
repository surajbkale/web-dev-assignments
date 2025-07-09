const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const courseModel = require("../models/course.model");

const SECRET = process.env.JWT_SECRET;

// User Signup
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: `User already exists` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ username, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "48h" });

    res.json({ message: `user created successfully`, token });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error creating user`, error: err.message });
  }
};

// User signin
exports.signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "48h" });

    res.json({
      message: "Logged in successfully",
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Login failed",
      error: err.message,
    });
  }
};

// Get all publised courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({ published: true });
    res.json({ courses });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to fetch courses`, error: err.message });
  }
};

// Purchase a course
exports.purchaseCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const userId = req.userId;

  try {
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: `Courses not found` });
    }

    const user = await userModel.findById(userId);

    // Preventing duplicate purchase
    if (user.purchasedCourses.includes(courseId)) {
      return res.status(400).json({ message: `Course already purchased` });
    }

    user.purchasedCourses.push(courseId);
    await user.save();

    res.json({ message: `Course purchased successfully` });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to purchase course`, error: err.message });
  }
};

// Get purchased courses
exports.getPurchasedCourses = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await userModel.findById(userId).populate("purchasedCourses");

    if (!user) {
      return res.status(404).json({ message: `User not found` });
    }

    res.json({ purchasedCourses: user.purchasedCourses });
  } catch (err) {
    res.status(500).json({
      message: `Failed to fetch purchased course`,
      error: err.message,
    });
  }
};
