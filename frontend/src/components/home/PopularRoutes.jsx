import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PopularRoutes = () => {
  const navigate = useNavigate();

  const routes = [
    {
      id: 1,
      name: "Delhi",
      image:
        "https://images.unsplash.com/photo-1583241800516-7c49b4a0a3dd?auto=format&fit=crop&w=1740&q=80",
      description: "Explore the vibrant capital city of India.",
    },
    {
      id: 2,
      name: "Kochi",
      image:
        "https://images.unsplash.com/photo-1592819445603-0b1e5b7b5a5c?auto=format&fit=crop&w=1740&q=80",
      description: "The queen of the Arabian Sea.",
    },
    {
      id: 3,
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1740&q=80",
      description: "Sun, sand, and serene beaches await you.",
    },
    {
      id: 4,
      name: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1533106418989-88406c7cc8e1?auto=format&fit=crop&w=1740&q=80",
      description: "Experience the royal pink city of Rajasthan.",
    },
  ];

  const handleBookNow = (routeName) => {
    navigate("/search-results", {
      state: {
        from: "Your City",
        to: routeName,
        date: new Date().toISOString().split("T")[0],
      },
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="text-[3.5rem] leading-tight font-extrabold text-gray-900 mb-4">
            Popular <span className="text-blue-600">Routes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Choose from our most loved destinations and start your journey with
            comfort and ease.
          </p>
          <div className="mt-4 w-24 h-[4px] bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
        </motion.div>

        {/* Route Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-[460px]"
            >
              {/* Background Image */}
              <img
                src={route.image}
                alt={route.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay Gradient Animation */}
              <motion.div
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-700/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 transition-all duration-500 group-hover:bottom-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold text-white drop-shadow-lg"
                >
                  {route.name}
                </motion.h3>
                <p className="text-gray-200 text-sm mb-4">{route.description}</p>

                {/* Book Now Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleBookNow(route.name)}
                  className="mt-3 inline-flex items-center gap-2 px-5 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:shadow-xl transition-all opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-500"
                >
                  Book Now <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/60 rounded-3xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularRoutes;
