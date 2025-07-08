import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance.js";

const AuthPage = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setIsSignUpActive(!isSignUpActive);
    setMessage("");
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSigninChange = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/user/signup", signupData);
      setMessage(res.data.message);
      setSignupData({ name: "", email: "", password: "" });
    } catch (err) {
      if (err.response?.data?.errors) {
        setMessage(
          err.response.data.errors
            .map((e) => `${e.field}: ${e.message}`)
            .join("\n")
        );
      } else {
        setMessage(err.response?.data?.message || "Signup failed.");
      }
    }
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/api/user/signin", signinData);
      setMessage("Logged in successfully");
      localStorage.setItem("token", res.data.token); // store JWT
      // optionally redirect or fetch user todos now
    } catch (err) {
      setMessage(err.response?.data?.message || "Signin failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-[800px] h-[500px] bg-white shadow-2xl rounded-lg overflow-hidden flex">
        {/* Left Panel */}
        <div
          className={`w-1/2 p-10 flex flex-col items-center justify-center transition-all duration-500 ${
            isSignUpActive
              ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {isSignUpActive ? (
            <>
              <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-6 text-center">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={handleToggle}
                className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-orange-500 transition"
              >
                SIGN IN
              </button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
              <p className="mb-6 text-center">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={handleToggle}
                className="px-6 py-2 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition"
              >
                SIGN UP
              </button>
            </>
          )}
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-10 flex flex-col justify-center items-center bg-white transition-all duration-500">
          {isSignUpActive ? (
            <form onSubmit={handleSignupSubmit} className="w-full max-w-xs">
              <h1 className="text-2xl font-bold mb-6">Create Account</h1>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={signupData.name}
                onChange={handleSignupChange}
                className="mb-3 px-4 py-2 w-full border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                className="mb-3 px-4 py-2 w-full border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                className="mb-5 px-4 py-2 w-full border rounded"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600 transition"
              >
                SIGN UP
              </button>
            </form>
          ) : (
            <form onSubmit={handleSigninSubmit} className="w-full max-w-xs">
              <h1 className="text-2xl font-bold mb-6">Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={signinData.email}
                onChange={handleSigninChange}
                className="mb-3 px-4 py-2 w-full border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={signinData.password}
                onChange={handleSigninChange}
                className="mb-3 px-4 py-2 w-full border rounded"
              />
              <a
                href="#"
                className="text-sm text-orange-500 hover:underline block mb-4 text-right"
              >
                Forgot your password?
              </a>
              <button
                type="submit"
                className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600 transition"
              >
                SIGN IN
              </button>
            </form>
          )}

          {/* Feedback Message */}
          {message && (
            <div className="mt-4 text-center text-sm text-red-600 whitespace-pre-line">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
