"use client";
import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="min-h-[90vh] py-24 bg-[#0d0b2d] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(147,51,234,0.3)_0%,rgba(12,30,115,0)_45%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How the App Works
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto h-[400px] relative"
        >
          <video
            src="/1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              1. Share Your Child&#39;s Magic
            </h3>
            <p className="text-neutral-200">
              Tell us your child&#39;s name, age, and interests.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              2. Let the Magic Begin
            </h3>
            <p className="text-neutral-200">
              Our app weaves a unique tale with your child as the star.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              3. Voices of Wonder
            </h3>
            <p className="text-neutral-200">
              Choose to read the story yourself or have it narrated by our AI or
              your cloned voice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
