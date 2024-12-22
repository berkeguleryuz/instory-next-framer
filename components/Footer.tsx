import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0b2d] py-2 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={100} height={100} className="cursor-pointer" />
          </Link>

          <div className="text-white/70 text-sm">
            © 2025 InStory. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <FaFacebook className="w-5 h-5 text-white cursor-pointer hover:text-white/80" />
            <FaInstagram className="w-5 h-5 text-white cursor-pointer hover:text-white/80" />
            <FaYoutube className="w-5 h-5 text-white cursor-pointer hover:text-white/80" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
