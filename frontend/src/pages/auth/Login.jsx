// src/pages/auth/Login.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/auth/authSlice";
import AuthLayout from "../layout/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

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
      dispatch(signIn({ credentials: form, navigate }));
    }
  };

  return (
    <AuthLayout
  title="Welcome Back to"
  highlight="Travelzo"
  subtitle="Continue your journey, manage your bookings, and explore the world with comfort and ease."
  quote="“Where every ride takes you closer to a new story.”"
  image="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1740&q=80"
  overlayColor="bg-[#0A1F44]/90"
>

      <h2 className="text-3xl font-bold text-[#0A1F44] mb-8 text-center">
        Login to Continue
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
        />

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
          disabled={status === "loading"}
          className="w-full py-3 bg-[#0A1F44] text-white rounded-xl font-semibold hover:bg-[#132B5E] transition"
        >
          {status === "loading" ? "Logging in..." : "Login"}
        </motion.button>

        {error && <p className="text-center text-red-500 text-sm mt-2">{error}</p>}
      </form>

      <p className="text-center text-gray-600 text-sm mt-8">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-[#00A8E8] font-semibold hover:underline">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
