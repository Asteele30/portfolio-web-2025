"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300 opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
    </div>
  );
}