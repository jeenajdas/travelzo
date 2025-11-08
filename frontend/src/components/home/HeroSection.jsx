import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Search } from "lucide-react";
import Navbar from "./Navbar";

const HeroSection = ({ onSearch }) => {
  const [searchForm, setSearchForm] = useState({
    from: "",
    to: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!searchForm.from.trim()) newErrors.from = "From city is required";
    if (!searchForm.to.trim()) newErrors.to = "To city is required";
    if (searchForm.from.trim() === searchForm.to.trim() && searchForm.from.trim()) {
      newErrors.to = "From and To cities must be different";
    }
    if (!searchForm.date) newErrors.date = "Date is required";
    const selectedDate = new Date(searchForm.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) newErrors.date = "Date cannot be in the past";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (onSearch) onSearch(searchForm);
      else alert("Search initiated!");
    }
  };

  const handleInputChange = (field, value) => {
    setSearchForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{
          backgroundImage: "url('/heroBanner.webp')",
        }}
      >
        {/* Navbar Over Hero */}
        <Navbar />

        {/* Reduced Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content - Left Aligned */}
        <div className="relative z-10 flex-1 flex flex-col justify-center pt-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Book Your Bus Ticket Now
              </h1>
              <p className="text-lg md:text-2xl text-gray-100 mb-8 leading-relaxed">
                Travel comfortably to your destination with affordable fares and premium comfort
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Search Form - Below Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-20 -mt-32 px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            {/* Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* From */}
              <motion.div whileHover={{ y: -2 }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  From
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  value={searchForm.from}
                  onChange={(e) => handleInputChange("from", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all outline-none font-medium text-gray-800 ${
                    errors.from
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  }`}
                />
                {errors.from && <p className="text-red-600 text-xs mt-1">{errors.from}</p>}
              </motion.div>

              {/* To */}
              <motion.div whileHover={{ y: -2 }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  To
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  value={searchForm.to}
                  onChange={(e) => handleInputChange("to", e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all outline-none font-medium text-gray-800 ${
                    errors.to
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  }`}
                />
                {errors.to && <p className="text-red-600 text-xs mt-1">{errors.to}</p>}
              </motion.div>

              {/* Date */}
              <motion.div whileHover={{ y: -2 }}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Departure
                </label>
                <input
                  type="date"
                  value={searchForm.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all outline-none font-medium text-gray-800 ${
                    errors.date
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  }`}
                />
                {errors.date && <p className="text-red-600 text-xs mt-1">{errors.date}</p>}
              </motion.div>
            </div>

            {/* Search Button */}
            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <Search className="w-6 h-6" />
              Search
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;