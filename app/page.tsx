import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import WhyInstory from "@/components/home/WhyInstory";
import Pricing from "@/components/home/Pricing";
import Contact from "@/components/home/Contact";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyInstory />
      <Pricing />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
