//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the Course Management API");
});

// Admin Routes
app.use("/admin", adminRoutes);

// User Routes
app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port 3000");
});
