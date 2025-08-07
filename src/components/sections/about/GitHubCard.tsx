"use client";

import { ArrowRight } from "lucide-react";

export default function GitHubCard() {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-slate-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full animate-pulse"></div>
          GitHub Activity
        </h3>
        <div className="space-y-4">
          <div className="w-full overflow-hidden rounded-xl bg-white/30 p-3 hover:bg-white/50 transition-colors duration-300">
            <img
              src="https://ghchart.rshah.org/ASteele30"
              alt="GitHub contribution chart"
              className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
              style={{ minHeight: 100 }}
            />
          </div>
          <a
            href="https://github.com/ASteele30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl w-full text-sm font-semibold hover:from-gray-700 hover:to-gray-600 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}