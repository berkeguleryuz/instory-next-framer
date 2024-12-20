"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMagic, FaWallet, FaClock } from "react-icons/fa";

const WhyInstory = () => {
  return (
    <section
      id="why-love"
      className="min-h-[70vh] py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0b2d] tracking-tight">
            Why You Will Love inStory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-lg bg-gray-50 shadow-lg"
          >
            <FaMagic className="w-12 h-12 text-[#0d0b2d] mb-6" />
            <h3 className="text-xl font-semibold text-[#0d0b2d] mb-4">
              Convenience at Your Fingertips
            </h3>
            <p className="text-gray-600">
              Access personalized stories anytime, anywhere, making bedtime
              magical wherever you are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-lg bg-gray-50 shadow-lg"
          >
            <FaWallet className="w-12 h-12 text-[#0d0b2d] mb-6" />
            <h3 className="text-xl font-semibold text-[#0d0b2d] mb-4">
              Affordable Adventures
            </h3>
            <p className="text-gray-600">
              Our subscription models make daily personalized stories accessible
              to every family.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-lg bg-gray-50 shadow-lg"
          >
            <FaClock className="w-12 h-12 text-[#0d0b2d] mb-6" />
            <h3 className="text-xl font-semibold text-[#0d0b2d] mb-4">
              Stress-Free Storytelling
            </h3>
            <p className="text-gray-600">
              Even on your busiest days, ensure your child enjoys the benefits
              of a bedtime story.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyInstory;
