import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import WhyInstory from "@/components/home/WhyInstory";
import Pricing from "@/components/home/Pricing";
import Contact from "@/components/home/Contact";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyInstory />
      <Pricing />
      <Contact />
      <Newsletter />
    </main>
  );
}
