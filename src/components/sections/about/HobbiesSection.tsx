"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Hobby {
  name: string;
  desc: string;
  images: string[];
}

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

export default function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <article className="bg-white/40 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse"></div>
          My Hobbies
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          className="rounded-xl overflow-hidden"
        >
          {hobbies.flatMap((hobby) =>
            hobby.images.map((img, idx) => (
              <SwiperSlide key={`${hobby.name}-${idx}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 group shadow-lg">
                  <Image
                    src={img}
                    alt={`${hobby.name} ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1">{hobby.name}</h3>
                      <p className="text-sm text-white/90 leading-relaxed pb-4">{hobby.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </article>
  );
}