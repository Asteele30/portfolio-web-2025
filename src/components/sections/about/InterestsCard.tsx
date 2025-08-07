"use client";

import { Code, Coffee, Heart, LucideIcon } from "lucide-react";

interface Interest {
  name: string;
  icon: LucideIcon;
}

interface InterestsCardProps {
  interests: Interest[];
}

export default function InterestsCard({ interests }: InterestsCardProps) {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse"></div>
          Interests
        </h3>
        <div className="space-y-3 text-sm text-gray-700">
          {interests.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default group/interest p-2 rounded-lg hover:bg-white/30">
                <Icon size={18} className="text-blue-600 group-hover/interest:scale-110 transition-transform duration-200" />
                <span>{it.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}