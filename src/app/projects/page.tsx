"use client";

import { useState } from "react";
import { Hammer, Cone, AlertTriangle, X } from "lucide-react";
import OriginalProjectsPage from "./OriginalProjectsPage"; // rename your current projects code into this file

export default function ProjectsPage() {
  const [showRealPage, setShowRealPage] = useState(false);

  if (!showRealPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 px-4">
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-12 max-w-lg w-full text-center border border-white/40 shadow-xl">
          
          {/* Icon Row */}
          <div className="flex justify-center gap-4 mb-6 text-violet-600">
            <Cone size={48} className="animate-bounce" />
            <Hammer size={48} className="animate-pulse" />
            <AlertTriangle size={48} className="animate-bounce delay-150" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Under Construction
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
             My projects page is getting a fresh coat of code!  
            Check back soon to see all the cool stuff I&apos;ve been building.
          </p>
        </div>
      </div>
    );
  }

  // Show your real projects page if dev toggles it
  return <OriginalProjectsPage />;
}
