import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Armchair, Zap, Shield, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      number: '01',
      icon: Armchair,
      title: 'Travel Between Cities Easily And Comfortably',
      description: 'Air conditioning and USB chargers in every bus – top comfort! Free Wi-Fi is now available on all our buses.',
    },
    {
      id: 2,
      number: '02',
      icon: Zap,
      title: 'Save Time And Money – Choose The Bus',
      description: 'Comfort, safety, and speed – everything for your journey. With us, always on time and hassle-free.',
    },
    {
      id: 3,
      number: '03',
      icon: Shield,
      title: 'Your Safety Is Our Priority',
      description: 'Experienced and trained drivers with 24/7 GPS tracking. Emergency assistance available anytime.',
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&q=80"
                alt="Traveler"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase mb-4">
                What will you get
              </p>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
                Day And Night Routes Is Available For The Best Time For You
              </h2>
            </motion.div>

            {/* Features List */}
            <div className="space-y-12">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    onMouseEnter={() => setHoveredCard(feature.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group cursor-pointer relative pb-12 last:pb-0"
                  >
                    {/* Divider Line */}
                    {idx < features.length - 1 && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-teal-200 via-teal-100 to-transparent"
                      ></motion.div>
                    )}

                    <div className="flex gap-6">
                      {/* Number with Icon */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <p className="text-2xl font-extrabold text-teal-700 mb-4">
                          {feature.number}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ duration: 0.3 }}
                          className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <motion.h3
                          animate={hoveredCard === feature.id ? { x: 5 } : { x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-teal-700 transition-colors"
                        >
                          {feature.title}
                        </motion.h3>
                        
                        <p className="text-gray-600 text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mt-12 pt-12 border-t border-teal-100"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                {/* Animated background shift */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                ></motion.div>

                <span className="relative z-10">Book Your Journey</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Right - GO TOP Button */}
        <motion.button
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 font-bold text-xs"
        >
          GO TOP
        </motion.button>
      </div>
    </section>
  );
};

export default WhyChooseUs;