import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [day, setDay] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Set current day
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    setDay(today);

    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axiosInstance.get("api/todo/my-todos", {
        headers: { Authorization: token },
      });
      setTodos(res.data.todos);
    } catch (err) {
      console.error(err.response?.data?.message || "Failed to fetch todos");
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo) return;

    try {
      await axiosInstance.post(
        "/api/todo/create-todo",
        { title: newTodo },
        { headers: { Authorization: token } }
      );
      setNewTodo("");
      fetchTodos();
    } catch (err) {
      console.err(err.response?.data?.message || "Failed to add todos");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`api/todo/delete-todo/${id}`, {
        headers: { Authorization: token },
      });
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTodo = async (id, done) => {
    try {
      await axiosInstance.put(
        `/api/todo/mark-todo/${id}`,
        { done: !done },
        { headers: { Authorization: token } }
      );
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-[350px] bg-gray-800 rounded-xl overflow-hidden shadow-lg text-white">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1565172265978-aaa872e3f618?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
            alt="background"
            className="w-full h-48 object-cover"
          />
          <h2 className="absolute top-4 left-4 text-4xl font-bold text-blue-950">
            {day}
          </h2>
        </div>

        <div className="p-4">
          <form
            onSubmit={addTodo}
            className="flex items-center border-b border-gray-600 pb-3 mb-4"
          >
            <input
              type="text"
              placeholder="Add item..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="bg-transparent flex-1 text-white placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              className="text-orange-400 text-xl ml-2 hover:text-orange-500"
            >
              +
            </button>
          </form>

          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            {todos.map((todo) => (
              <div key={todo._id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo._id, todo.done)}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <span
                    className={`${
                      todo.done ? "line-through text-gray-500" : "text-white"
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="text-gray-500 hover:text-red-500 text-lg"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
