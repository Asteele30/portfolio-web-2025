"use client";

import { Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <article className="bg-white/40 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
          Experience
        </h2>
        <div className="space-y-6 text-left">
          {experiences.map((exp, i) => (
            <div key={i} className="pl-6 border-l-2 border-gradient-to-b from-blue-500 to-purple-500 relative hover:border-blue-600 transition-colors group/exp">
              <div className="absolute -left-2.5 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover/exp:scale-125 group-hover/exp:shadow-lg transition-all duration-300" />
              <div className="bg-white/30 rounded-xl p-4 hover:bg-white/50 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover/exp:text-blue-700 transition-colors text-lg">{exp.title}</h3>
                  <time className="text-sm text-blue-600 flex items-center gap-2 mt-1 sm:mt-0 group-hover/exp:text-blue-700 transition-colors font-medium">
                    <Calendar size={16} /> {exp.period}
                  </time>
                </div>
                <p className="text-sm text-purple-600 font-medium mt-1 group-hover/exp:text-purple-700 transition-colors">{exp.company}</p>
                <p className="text-sm text-gray-700 mt-3 group-hover/exp:text-gray-800 transition-colors leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((t) => (
                    <span key={t} className="text-xs md:text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1.5 rounded-full hover:bg-gradient-to-r hover:from-blue-200 hover:to-purple-200 hover:scale-105 transition-all duration-200 cursor-default font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
