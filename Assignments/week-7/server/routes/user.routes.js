const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const userAuth = require("../middlewares/userAuth.middleware");

// Signup
router.post("/signup", userController.signup);

// Login
router.post("signin", userController.signin);

// Get all published courses
router.get("/courses", userAuth, userController.getCourses);

// Purchase a course
router.post("/courses/:courseId", userAuth, userController.purchaseCourse);

// Get purchased courses
router.get("/purchasedCourses", userAuth, userController.getPurchasedCourses);

module.exports = router;
