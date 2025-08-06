"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="animate-fade-in fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl 
                    bg-gradient-to-r from-pink-300/80 via-purple-300/80 to-pink-200/80 
                    backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-8 py-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
        href="/"
        className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent
                    drop-shadow-md
                    hover:scale-105 hover:drop-shadow-xl transition transform duration-300"
        onClick={() => setMobileMenuOpen(false)}
        >
        Aspen Steele
        </Link>

        {/* Nav Items */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="relative font-medium text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#FF6EC7] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Contact Button */}
          <li>
            <Button
              className="bg-[#FF6EC7] text-white hover:bg-[#C154C1] transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </li>
        </ul>

         {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[6px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-900 rounded transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/*Mobile Menu*/}
      {mobileMenuOpen && (
        <div className= "mt-4 flex flex-col items-center gap-4 md:hidden">
            {navItems.map((item) => (
             <Link
              key={item.label}
              href={item.href}
              className="font-medium text-gray-900 w-full text-center py-2 rounded hover:bg-pink-200 transition"
              onClick={() => setMobileMenuOpen(false)} // close on click
            >{item.label}
            </Link>
            ))}
            <Button
            className="bg-[#FF6EC7] text-white hover:bg-[#C154C1] w-full transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
            asChild
          >
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
