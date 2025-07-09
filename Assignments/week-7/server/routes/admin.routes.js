const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const adminAuth = require("../middlewares/adminAuth.middleware");
// Signup route
router.post("/signup", adminController.signup);

// Login route
router.post("/login", adminController.login);

// Create new Course
router.post("/course", adminAuth, adminController.createCourse);

// Update existing course
router.put("/courses/:courseId", adminAuth, adminController.updateCourse);

// Get all courses
router.get('/courses', adminAuth, adminController.getCourses)


module.exports = router;
