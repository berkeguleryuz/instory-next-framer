"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaMicrophone } from "react-icons/fa";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="min-h-screen pt-32 pb-24 bg-[#0d0b2d] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(147,51,234,0.3)_0%,rgba(12,30,115,0)_45%)]" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10"
          >
            <FaRobot className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              AI Teller
            </h3>
            <ul className="space-y-4 text-neutral-200">
              <li>• 1 personalized story per day</li>
              <li>• Narrated by our AI</li>
              <li>• Multiple story themes</li>
              <li>• Customizable characters</li>
            </ul>
            <button className="mt-8 bg-white text-[#0d0b2d] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Choose Plan
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10"
          >
            <FaMicrophone className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Family Voice
            </h3>
            <ul className="space-y-4 text-neutral-200">
              <li>• 1 personalized story per day</li>
              <li>• Voice cloning for up to 2 parental voices</li>
              <li>• Premium story themes</li>
              <li>• Advanced customization options</li>
            </ul>
            <button className="mt-8 bg-white text-[#0d0b2d] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Choose Plan
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
