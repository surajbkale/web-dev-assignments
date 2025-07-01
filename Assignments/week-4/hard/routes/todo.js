const { Router } = require("express");
const { Todo } = require("../database/index.js");
const userMiddleware = require("../middleware/user.js");

const router = Router();

// todo Routes
router.post("/", userMiddleware, async (req, res) => {
  const { title, userId } = req.body;
  const todo = await Todo.create({ title, user: userId });
  res.status(201).json(todo);
});

router.put("/", userMiddleware, async (req, res) => {
  const { id, title, completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(
    { id, title, completed },
    { new: true }
  );
  res.status(200).json(todo);
});

// router.delete("/", userMiddleware, async(req, res) => {
//   // Implement delete todo logic
// });

router.delete("/:id", userMiddleware, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Todo deleted` });
});

router.get("/", userMiddleware, async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

router.get("/:id", userMiddleware, async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.status(200).json(todo);
});

module.exports = router;
