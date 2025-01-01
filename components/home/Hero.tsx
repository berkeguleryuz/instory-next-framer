"use client";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import i1 from "@/public/newhero/i1.png";
import i2 from "@/public/newhero/i2.png";
import i3 from "@/public/newhero/i3.png";
import i4 from "@/public/newhero/i4.png";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const CyclingImages = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev % totalImages) + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={`/${currentImage}.webp`}
            alt={`Hero image ${currentImage}`}
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="h-screen pt-24 pb-72 md:pt-28 md:pb-64 bg-[#0d0b2d] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_70%_-20%,rgba(88,28,135,0.15),transparent_100%)]" />
      </div>

    
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_0%,rgba(147,51,234,0.3)_0%,rgba(12,30,115,0)_45%)]" />

     <motion.div
        style={{ translateY }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          className="absolute md:left-[1%] left-[45%] top-[35%] md:top-[50%] w-[420px] h-[420px]"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2.5,
            ease: "easeInOut",
          }}
        >
          <Image
            src={i1}
            alt="cog image"
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="absolute w-[600px] h-[600px] md:right-[5%] md:top-[40%] top-[55%] right-[30%]">
          <Image
            src={i2}
            alt="cylinder image"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute w-[140px] h-[140px] right-[5%] top-[25%] rotate-[15deg] md:w-[180px] md:h-[180px] hidden md:block">
          <Image
            src={i3}
            alt="star image"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute w-[140px] h-[140px] left-[35%] top-[70%] rotate-[5deg] md:w-[180px] md:h-[180px] block">
          <Image
            src={i4}
            alt="pyramid image"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="md:flex items-center justify-center gap-8">
          <div className="lg:w-[600px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              className="text-sm inline-flex text-neutral-300 border border-white/10 px-3 py-1 rounded-lg tracking-tight"
            >
              We Bring a New Adventure and a Deeper Connection with Every Story
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mt-6"
            >
              The Magical World of Personalized Bedtime Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 1.5 }}
              className="text-base text-neutral-200 tracking-tight mt-6"
            >
              In a realm where dreams take flight, nestled amidst the soft glow
              of bedtime stories, lies a magical app called inStory. This
              enchanting tool weaves personalized tales where your child becomes
              the hero, embarking on captivating adventures tailored to their
              unique interests.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 2 }}
              className="flex gap-3 items-center mt-[30px]"
            >
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight gap-2">
                <FaApple className="h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-xl leading-none">App Store</span>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center tracking-tight gap-2">
                <FaGooglePlay className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Get it on</span>
                  <span className="text-xl leading-none">Google Play</span>
                </div>
              </button>
            </motion.div>
          </div>

          <div className="mt-20 md:mt-0 lg:h-[350px] md:w-[400px] relative">
            <CyclingImages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
