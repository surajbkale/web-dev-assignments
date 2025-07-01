const { Router } = require("express");
const userMiddleware = require("../middleware/user.js");
const { User, Todo } = require("../database/index.js");

const router = Router();

// User Routes
router.post("/signup", async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.create({ username, email });
    res.status(201).json({ message: `User created ${user}` });
  } catch (error) {
    res.status(400).json({ error: `User already exists or invalid data` });
  }
});

router.post("/login", async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findOne({ username, email });

  if (!user) {
    return res.status(401).json({ error: `Invalid crediantials` });
  }

  res.status(200).json({ token: `secret-token` });
});

router.get("/todos", userMiddleware, async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

router.post("/logout", userMiddleware, (req, res) => {
  res.status(200).json({ message: `Logged out successfully` });
});

module.exports = router;
