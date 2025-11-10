// src/pages/auth/ForgotPassword.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../services/axiosInstance";
import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/forgot-password", { email });
      setSubmitted(true);
      setMessage(res.data.message || "Reset link sent successfully!");
    } catch (err) {
      setMessage(err.response?.data?.error || "Error sending reset link.");
    }
  };

  return (
    <AuthLayout
  title="Forgot Your"
  highlight="Password?"
  subtitle="No worries — we’ll help you get back on track quickly."
  image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1740&q=80"
  overlayColor="bg-[#0A1F44]/80"
>

      <h2 className="text-3xl font-bold text-[#0A1F44] mb-3 text-center">
        Forgot Password
      </h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-[#0A1F44] text-white rounded-xl font-semibold hover:bg-[#132B5E] transition"
          >
            Send Reset Link
          </motion.button>
        </form>
      ) : (
        <p className="text-center text-gray-700 mt-4">
          ✅ {message || (
            <>
              Reset link sent to{" "}
              <span className="font-semibold text-[#00A8E8]">{email}</span>
            </>
          )}
        </p>
      )}

      <p className="text-center text-gray-600 text-sm mt-8">
        Remember your password?{" "}
        <Link to="/login" className="text-[#00A8E8] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;
