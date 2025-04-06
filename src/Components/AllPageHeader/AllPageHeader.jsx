'use client'
import UwMallLogo from "../../assets/GoldenLogoForAllPages.png";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function AllPageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <section className="relative w-full max-w-[1400px] mx-auto">
      {/* Navigation */}
      <div className="relative z-10 flex justify-between items-center p-6 md:p-10">
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-light tracking-widest">
            <img src={UwMallLogo} alt="UW Mall Logo" width={100} height={100} />
            {/* <span className="font-bold">UW</span> MALL */}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex  sm:space-x-8 lg:space-x-12 text-black text-[8px] lg:text-[11px] uppercase tracking-wider mt-3">
          <a href="/" className="hover:border-b h-6 hover:border-black pb-1">
            EXPLORE OUR MALL
          </a>
          <a href="/aboutUs" className="hover:border-b h-6 hover:border-black pb-1">
            ABOUT
          </a>
          <a href="/brands" className="hover:border-b h-6 hover:border-black pb-1">
            BRANDS
          </a>
          <a href="/stories" className="hover:border-b h-6 hover:border-black pb-1">
            STORIES
          </a>
          <a href="/career" className="hover:border-b h-6 hover:border-black pb-1">
            CAREERS
          </a>
          <a href="/contactus" className="hover:border-b h-6 hover:border-black pb-1">
            CONTACT
          </a>
        </nav>

        {/* Hamburger Icon (Mobile Navigation) */}
        <button
          onClick={toggleMobileMenu}
          className=" text-black"
        >
          <MoreHorizontal className="w-10 h-10 text-[#dbb85d]" />
        </button>
      </div>

      {/* Mobile Navigation (Animated) */}
      <div
        className={`absolute top-[100px] left-0 w-full bg-white text-black p-6 space-y-4 md:hidden transform z-10 ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <a href="/" className="block text-lg font-medium">
          EXPLORE OUR MALL
        </a>
        <a href="/aboutUs" className="block text-lg font-medium">
          ABOUT
        </a>
        <a href="/brands" className="block text-lg font-medium">
          BRANDS
        </a>
        <a href="/stories" className="block text-lg font-medium">
          STORIES
        </a>
        <a href="/career" className="block text-lg font-medium">
          CAREERS
        </a>
        <a href="/contactus" className="block text-lg font-medium">
          CONTACT
        </a>
      </div>

      {/* Hero Content */}
      {/* Add any hero content here */}
    </section>
  );
}
