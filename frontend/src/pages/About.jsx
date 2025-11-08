import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, MapPin, Zap } from 'lucide-react';
import Navbar from '../components/home/Navbar';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Premium buses with modern amenities ensuring your comfort throughout the journey.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced drivers and support staff dedicated to your safety and satisfaction.',
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Connecting major cities and towns across the country with reliable routes.',
    },
    {
      icon: Zap,
      title: 'Fast Booking',
      description: 'Book your tickets in seconds with our simple and user-friendly platform.',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Active Routes' },
    { value: '50K+', label: 'Daily Travelers' },
    { value: '100%', label: 'Safety Record' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Travelzo</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Making travel accessible, affordable, and comfortable for everyone across the nation.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded with a vision to revolutionize bus travel, Travelzo has been serving
                millions of travelers for over a decade. We believe that everyone deserves
                comfortable and affordable transportation.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                From humble beginnings to becoming a trusted name in the industry, we've
                continuously innovated to provide the best travel experience possible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we connect over 500 routes and serve thousands of travelers daily,
                making every journey memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl p-1">
                <div className="bg-white rounded-2xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-blue-600 mb-2">10+</p>
                    <p className="text-xl text-gray-700">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Why Choose Travelzo?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your next trip with Travelzo and experience the difference.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-lg hover:shadow-2xl transition-all duration-300"
          >
            Book Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;