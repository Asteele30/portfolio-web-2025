"use client";

import Link from "next/link";
import { MapPin, Code, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuickInfoCard() {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
          Quick Info
        </h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default p-2 rounded-lg hover:bg-white/30">
            <MapPin size={18} className="text-blue-600" /> <span>Atlanta, GA</span>
          </div>
          <div className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default p-2 rounded-lg hover:bg-white/30">
            <Code size={18} className="text-blue-600" /> <span>Frontend Developer</span>
          </div>
          <div className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default p-2 rounded-lg hover:bg-white/30">
            <Calendar size={18} className="text-blue-600" /> <span>Available for Projects</span>
          </div>
        </div>
        <Link href="/contact" className="block mt-6">
          <Button className="w-full text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 py-3 font-semibold shadow-lg">
            Contact Me for my Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}