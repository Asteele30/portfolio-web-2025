"use client";

export default function BioSection() {
  return (
    <article className="bg-white/40 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:animate-pulse"></div>
          My Story
        </h2>
        <div className="text-gray-700 text-sm md:text-base space-y-3 text-left">
          <p className="hover:text-gray-800 transition-colors">
            Hi! I&apos;m a passionate front-end developer who loves building clean, efficient, user-focused applications.
          </p>
          <p className="hover:text-gray-800 transition-colors">
            I work with modern web stacks - React, Next.js, and Node.js, and have experience with Java and C#.
          </p>
          <p className="hover:text-gray-800 transition-colors">
            I enjoy learning new tools, growing my knowledge, and cats!
          </p>
        </div>
      </div>
    </article>
  );
}