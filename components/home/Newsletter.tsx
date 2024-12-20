"use client";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section className="min-h-[30vh] py-24 bg-[#0d0b2d] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-lg">
            <FaEnvelope className="w-12 h-12 text-white mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
              Subscribe to Our Waitinglist
            </h3>
            <p className="text-white/80 mb-6 text-center">
              Get magical updates, special offers, and enchanting stories
              delivered right to your inbox!
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-white text-[#0d0b2d] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50">
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 text-green-400">Successfully subscribed!</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-red-400">
                Failed to subscribe. Please try again.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
