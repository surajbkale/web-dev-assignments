const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const adminModel = require("../models/admin.model");
const courseModel = require("../models/course.model");

const SECRET = process.env.JWT_SECRET;

// Admin Signup
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await adminModel.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new adminModel({ username, password: hashedPassword });
    await newAdmin.save();

    const token = jwt.sign({ id: newAdmin._id }, SECRET, { expiresIn: "48h" });

    res.json({ message: "Admin created successfully", token });
  } catch (err) {
    res.status(500).json({
      message: "Error creating admin",
      error: err.message,
    });
  }
};

// Admin Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await adminModel.findOne({ username });
    if (!admin) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: admin._id }, SECRET, { expiresIn: "48h" });

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

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description, price, imageLink, published } = req.body;

  try {
    const newCourse = new courseModel({
      title,
      description,
      price,
      imageLink,
      published,
    });
    await newCourse.save();

    res.json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create course",
      error: err.message,
    });
  }
};

// Update existing course
exports.updateCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const { title, description, price, imageLink, published } = req.body;

  try {
    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    course.title = title;
    course.description = description;
    course.price = price;
    course.imageLink = imageLink;
    course.published = published;

    await course.save();

    res.json({ message: "Course updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update course", error: err.message });
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();

    res.json({ courses });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch courses", error: err.message });
  }
};
