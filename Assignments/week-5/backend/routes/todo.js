const express = require("express");
const { TodoModel } = require("../db/index");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/user");

const router = express.Router();

// create Todo
router.post("/create-todo", authMiddleware, async (req, res) => {
  const { title } = req.body;

  try {
    const todo = await TodoModel.create({
      title,
      createdBy: req.userId,
    });
    res.status(200).json({
      message: "Todo created",
      todo,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Update Todo
router.put("/update-todo/:id", authMiddleware, async (req, res) => {
  const { title } = req.body;

  try {
    const todo = await TodoModel.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.userId },
      { title },
      { new: true }
    );

    if (!todo) return res.status(404).json({ message: "Todo Not Found" });

    res.status(200).json({ message: "Todo updated", todo });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Mark Todo done/undone
router.put("/mark-todo/:id", authMiddleware, async (req, res) => {
  const { done } = req.body;

  try {
    const todo = await TodoModel.findByIdAndUpdate(
      { _id: req.params.id, createdBy: req.params.userId },
      { done },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo Status updated",
      todo,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete todo
router.delete("/delete-todo/:id", authMiddleware, async (req, res) => {
  try {
    const todo = await TodoModel.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.userId,
    });

    if (!todo)
      return res.status(404).json({
        message: "Todo not found",
      });

    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// show Todos of User
router.get("/my-todos", authMiddleware, async (req, res) => {
  try {
    const todos = await TodoModel.find({
      createdBy: req.userId,
    });
    res.status(200).json({ todos });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
