import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login data:", form);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0A1F44] overflow-hidden">
      {/* Left Image Section */}
      <motion.div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg')",
        }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/90 to-[#0A1F44]/60 flex flex-col justify-center px-12">
          <h1 className="text-white text-5xl font-extrabold leading-tight mb-4">
            Welcome Back to{" "}
            <span className="text-[#00A8E8] drop-shadow-md">Travelzo</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-md leading-relaxed">
            Your journey continues here. Manage your bookings and explore the
            world with comfort and ease.
          </p>
          <p className="text-[#00A8E8] text-sm mt-8 italic">
            “Where every ride takes you closer to a new story.”
          </p>
        </div>
      </motion.div>

      {/* Right Login Form Section */}
      <motion.div
        className="flex items-center justify-center w-full lg:w-1/2 px-8 sm:px-12 md:px-16 py-16 bg-[#F9FAFB]"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#0A1F44] mb-6 text-center">
            Login to Continue
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00A8E8] outline-none transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00A8E8] outline-none transition ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-[#0A1F44] hover:text-[#00A8E8] text-sm font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-[#0A1F44] text-white rounded-xl font-semibold shadow-md hover:bg-[#132B5E] transition"
            >
              Login
            </motion.button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#00A8E8] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
