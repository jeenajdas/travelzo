import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Routes", path: "/routes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Travelzo Logo"
              className="w-12 h-12 object-contain drop-shadow-lg"
            />
            <span className="text-white font-extrabold text-3xl tracking-wide drop-shadow-md">
              Travelzo
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex space-x-10 text-base font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-gray-200 hover:text-[#2563eb] transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#2563eb] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Side (Auth Links) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/login"
              className="text-gray-200 hover:text-[#2563eb] font-medium text-lg transition duration-300"
            >
              Login
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/signup"
                className="px-6 py-2.5 rounded-lg bg-[#2563eb] text-white font-semibold text-lg shadow-md hover:bg-[#1d4ed8] transition-all duration-300"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md text-white shadow-xl"
          >
            <div className="flex flex-col items-center py-5 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-200 hover:text-[#2563eb] font-medium text-lg transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="w-1/2 border-gray-600" />
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-[#2563eb] transition duration-300 text-lg"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-2.5 rounded-lg bg-[#2563eb] text-white font-semibold text-lg shadow-md hover:bg-[#1d4ed8] transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
