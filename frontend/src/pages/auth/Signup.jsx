// src/pages/auth/Signup.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../../features/auth/authSlice";
import AuthLayout from "../layout/AuthLayout";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password === form.confirmPassword) {
      const formData = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        password: form.password,
      };
      dispatch(signUp(formData));
      navigate("/login");
    }
  };

  return (
    <AuthLayout
  title="Create Your"
  highlight="Account"
  subtitle="Start your journey with us today — explore, book, and travel with comfort and confidence."
  image="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1740&q=80"
  overlayColor="bg-[#132B5E]/80"
  height="580px"
>

      <h2 className="text-3xl font-bold text-[#0A1F44] mb-8 text-center">
        Sign Up to Get Started
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="w-1/2 px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="w-1/2 px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-3 pr-12 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-3 pr-12 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-[#00A8E8] outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-3 text-gray-500"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={status === "loading"}
          className="w-full py-3 bg-[#0A1F44] text-white rounded-xl font-semibold hover:bg-[#132B5E] transition"
        >
          {status === "loading" ? "Creating Account..." : "Create Account"}
        </motion.button>

        {error && <p className="text-center text-red-500 text-sm mt-2">{error}</p>}
      </form>

      <p className="text-center text-gray-600 text-sm mt-8">
        Already have an account?{" "}
        <Link to="/login" className="text-[#00A8E8] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
