"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const featureItems = [
  {
    icon: "/1.webp",
    title: "Personalized Adventures",
    description:
      "Each story is crafted just for your child, with their name, age, and interests woven into the narrative.",
  },
  {
    icon: "/2.webp",
    title: "AI-Powered Magic",
    description:
      "Our intelligent app generates fresh, engaging stories every day, ensuring bedtime is never boring.  ",
  },
  {
    icon: "/3.webp",
    title: "Your Voice, Their Hero",
    description:
      "With our voice cloning feature, your child can hear their bedtime story narrated in your own voice, even when you're busy.",
  },
];

const Features = () => {
  return (
    <section id="features" className="min-h-[90vh] relative pb-16">
      <div className="md:h-[30vh] bg-[#0d0b2d]" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 my-24 md:grid-cols-3 gap-8 max-w-5xl -mt-24 mx-auto">
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-black/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-black/70 max-w-2xl mx-auto mt-8">
          Discover the magic of personalised bedtime stories that captivate and
          delight your child. Our AI-powered platform creates unique narratives
          tailored to their interests, fostering imagination and strengthening
          the parent-child bond.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <Image src="/n1.webp" alt="Hero" width={222} height={222} className="rounded-full" />
      </div>
    </section>
  );
};

export default Features;
