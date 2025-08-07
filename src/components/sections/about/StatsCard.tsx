"use client";

interface Stat {
  label: string;
  value: string;
}

interface StatsCardProps {
  stats: Stat[];
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-5 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
          By the Numbers
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-3 bg-white/30 rounded-xl hover:bg-white/50 transition-all duration-300 group/stat">
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover/stat:scale-105 transition-transform duration-200">{s.value}</div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}