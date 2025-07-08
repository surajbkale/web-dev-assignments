const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.js");
const todoRoutes = require("./routes/todo.js");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

// health-check route
app.get("/", (req, res) => {
  res.send({
    message: "working fine...",
  });
});

app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
