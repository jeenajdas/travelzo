import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">
      <motion.div
        className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl lg:h-[560px]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Image Section */}
        <div
          className="hidden lg:flex w-1/2 h-full relative bg-cover bg-center rounded-r-[80px] overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1740&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-[#0A1F44]/90 flex flex-col justify-center px-10 text-white">
            <h1 className="text-3xl font-extrabold mb-4 leading-tight">
              Welcome Back to{" "}
              <span className="text-[#00A8E8] drop-shadow-md">Travelzo</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Continue your journey, manage your bookings, and explore the world
              with comfort and ease.
            </p>
            <p className="text-[#00A8E8] text-xs mt-6 italic">
              “Where every ride takes you closer to a new story.”
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 sm:px-12 py-12">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-md"
          >
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-8 text-center">
              Login to Continue
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
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

            <p className="text-center text-gray-600 text-sm mt-8">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#00A8E8] font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
