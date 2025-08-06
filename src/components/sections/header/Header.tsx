"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-20 relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 md:py-24 gap-12 md:gap-20 relative z-10">
        {/* Text Content */}
        <div className="flex-[1.2] text-center md:text-left max-w-full md:max-w-2xl">
          <div className="mb-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/30">
              Welcome to my creative space! :)
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Aspen Steele.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
            A little bit of design, a little bit of code, and a whole lot of{" "}
            <span className="relative font-bold text-purple-700">
              curiosity.
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-yellow-300 to-purple-500 bg-[length:200%_100%] animate-[sparkle_2s_linear_infinite] rounded-full"></span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            {/* Primary button using Button + Link */}
            <Button asChild>
              <Link href="/projects">Explore Projects</Link>
            </Button>

            {/* Secondary / ghost button using variant="outline" */}
            <Button asChild variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative w-full max-w-sm sm:max-w-md md:max-w-lg">
          <div className="relative w-full h-80 sm:h-96 md:h-[520px] group cursor-pointer">
            {/* Main image container */}
            <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
              <Image
                src="/profile1.jpg"
                alt="Aspen Steele - Creative Developer"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                priority
              />

              {/* Easter egg overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/90 via-purple-500/90 to-indigo-500/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-white text-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200 px-6">
                  <div className="text-2xl font-bold mb-3">Behind every pixel...</div>
                  <div className="text-lg leading-relaxed">
                    there&apos;s a story, a late-night debugging session, and probably way too much coffee. Thanks for taking the time to explore!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
