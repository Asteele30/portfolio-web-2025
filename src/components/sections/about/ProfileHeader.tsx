// pages/about.tsx or app/about/page.tsx
"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


interface ProfileHeaderProps {
  profileImages: string[];
}

export function BannerCarouselHeader({ profileImages }: ProfileHeaderProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [profileImages.length]);

  return (
    <header className="text-center mb-12 space-y-6">
      {/* Circular Image Carousel */}
      <div className="relative mx-auto w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-400/30">
        {profileImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out rounded-full ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-full"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dot navigation */}
        <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {profileImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentImage
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>


      <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent pb-4">
        Hey! I&apos;m Aspen
      </h1>
    </header>
  );
}
