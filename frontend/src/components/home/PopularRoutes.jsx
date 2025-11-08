import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PopularRoutes = () => {
  const routes = [
    {
      id: 1,
      name: 'Delhi',
      image: 'https://images.unsplash.com/photo-1580168667228-57569169ea1f?w=600&h=400&fit=crop',
      description: 'Explore the capital city',
    },
    {
      id: 2,
      name: 'Rome',
      image: 'https://images.unsplash.com/photo-1552832860-cfaf67f1aa60?w=600&h=400&fit=crop',
      description: 'Ancient history awaits',
    },
    {
      id: 3,
      name: 'Prague',
      image: 'https://images.unsplash.com/photo-1577991472893-8f20484ee32f?w=600&h=400&fit=crop',
      description: 'City of a hundred spires',
    },
    {
      id: 4,
      name: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop',
      description: 'City of dreams',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-orange-500 font-semibold tracking-widest uppercase mb-2">
            Let's Ride Together
          </p>
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Popular Routes
            </h2>
            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400"
            ></motion.div>
          </div>
        </motion.div>

        {/* Routes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {routes.map((route) => (
            <motion.div
              key={route.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Card Image */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay - Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

                {/* Content - Top (Always Visible) */}
                <div className="absolute top-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                    {route.name}
                  </h3>
                  <p className="text-gray-200 text-sm mt-2">{route.description}</p>
                </div>

                {/* Gradient Overlay - Bottom (Hover Effect) */}
                <motion.div
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1e40af]/80 to-transparent"
                ></motion.div>

                {/* Book Now Button - Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between z-20"
                >
                  <div>
                    <p className="text-white/90 text-sm mb-2">Ready to explore?</p>
                    <p className="text-white font-semibold text-lg">Book your journey</p>
                  </div>
                  <Link
                    to="/SeatSelection"
                    className="flex-shrink-0"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Card Border Glow on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 border-2 border-orange-400 rounded-2xl pointer-events-none"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">
            Can't find your destination? 
            <span className="text-orange-500 font-semibold ml-2">Browse all routes</span>
          </p>
          <Link to="/routes">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Routes
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularRoutes;