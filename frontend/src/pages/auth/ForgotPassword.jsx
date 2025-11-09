import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
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
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1740&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-[#0A1F44]/80 flex flex-col justify-center px-10 text-white">
            <h1 className="text-3xl font-extrabold mb-3 leading-tight">
              Forgot Your{" "}
              <span className="text-[#00A8E8] drop-shadow-md">Password?</span>
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              No worries — we’ll help you get back on track quickly.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 sm:px-12 py-12 relative">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="w-full max-w-md z-10"
          >
            {/* Heading placed at the top */}
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-3 text-center">
              Forgot Password
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Enter your registered email — we’ll send a reset link.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#00A8E8] outline-none transition"
                />

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 bg-[#0A1F44] text-white rounded-xl font-semibold shadow-md hover:bg-[#132B5E] transition"
                >
                  Send Reset Link
                </motion.button>
              </form>
            ) : (
              <p className="text-center text-gray-700 mt-4">
                ✅ Reset link sent to{" "}
                <span className="font-semibold text-[#00A8E8]">{email}</span>
              </p>
            )}

            <p className="text-center text-gray-600 text-sm mt-8">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-[#00A8E8] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
