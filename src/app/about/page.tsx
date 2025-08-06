"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  Code,
  Coffee,
  MapPin,
  Calendar,
  Heart,
  Sparkles,
  Download,
  ArrowRight,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";




export default function AboutPage() {
  const experiences = [
    {
      title: "Development Intern",
      company: "121G LLC",
      period: "2024 - Present",
      description:
        "Developing web applications using React, Next.js, and Node.js. I mainly work with the 121GM department working on websites!",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
      title: "Student",
      company: "Kennesaw State University",
      period: "2022 - 2026",
      description:
        "Bachelor's Degree in Computer Science",
      technologies: ["Java", "C#", "Python", "SQL"],
    },
  ];

  const interests = [
    { name: "Web Development", icon: Code },
    { name: "Problem Solving", icon: Coffee },
    { name: "Open Source", icon: Heart },
  ];

  const hobbies = [
    {
      name: "Art",
      desc: "I love any form of art- painting, drawing, block printing!",
      images: ["/blockprinting.jpg", "/art.jpg"]
    },
    {
      name: "Reading & Nonfiction",
      desc: "I love to read anything! My current read is Lessons in Chemistry!",
      images: ["/reading.jpg"],
    },
    {
      name: "Traveling",
      desc: "I love to travel the world... Colorado has my heart though.",
      images: ["/14er.jpeg", "/cruise.jpg"],
    },
  ];

  const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Learned", value: "10+" },
    { label: "Coffee Cups", value: "∞" },
  ];

  const profileImages = ["/profile1.jpg", "/profile2.jpg", "/profile3.jpg"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 md:py-16 flex justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300 opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
      </div>

      <div className="w-full max-w-5xl px-4 relative z-10">
        <div className="text-center mb-8 md:mb-20 pt-20 sm:pt-24 lg:pt-28">
          {/* Header */}
          <header className="text-center mb-8 md:mb-12">
            {/* Enhanced profile carousel */}
            <div className="mx-auto mb-5 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[240px] rounded-full overflow-hidden border-4 border-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 relative group">
              {/* Rotating ring effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-75 animate-spin-slow blur-sm transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-full"></div>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full relative z-20"
              >
                {profileImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative aspect-square">
                      <Image
                        src={img}
                        alt={`Profile image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 320px"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="relative">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
                About Me
                <Sparkles className="inline-block ml-2 text-yellow-500 w-6 h-6 animate-pulse" />
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full animate-fade-in"></div>
              <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2 animate-fade-in-delay">
                Get to know my journey, skills, and passion for creating meaningful digital experiences.
              </p>
            </div>
          </header>

          {/* Main layout: stacked on mobile, grid on large screens */}
          <main className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Left: main content span 2 on lg */}
            <section className="lg:col-span-2 space-y-6">
              {/* Bio with enhanced styling */}
              <article className="bg-white/40 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:animate-pulse"></div>
                    My Story
                  </h2>
                <div className="text-gray-700 text-sm md:text-base space-y-3 text-left">
                    <p className="hover:text-gray-800 transition-colors">Hi! I&apos;m a passionate full-stack developer who loves building clean, efficient, user-focused applications.</p>
                    <p className="hover:text-gray-800 transition-colors">I work with modern web stacks — React, Next.js, and Node.js, and have experience with Java and C#.</p>
                    <p className="hover:text-gray-800 transition-colors">I enjoy learning new tools, contributing to open source, and helping others grow.</p>
                </div>
                </div>
              </article>

              {/* Experience with enhanced timeline */}
              <article className="bg-white/40 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-lg border border-white/50 hover:shadow-2xl hover:bg-white/50 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
                    Experience
                  </h2>
                  <div className="space-y-6">
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

              {/* Hobbies carousel with enhanced styling */}
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
            </section>

            {/* Right column with enhanced styling */}
            <aside className="space-y-6">
              {/* Stats card */}
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

              {/* Quick Info */}
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
                      <Download size={16} />
                      Contact Me for my Resume
                    </Button>
                  </Link>
                </div>
              </div>

              {/* GitHub Activity */}
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

              {/* Interests */}
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
            </aside>
          </main>

          {/* CTA with enhanced styling */}
          <div className="mt-12">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/50 text-center hover:shadow-2xl hover:bg-white/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                  Let&apos;s Work Together
                </h2>
                <p className="text-sm md:text-base text-gray-700 mb-6 group-hover:text-gray-800 transition-colors max-w-2xl mx-auto">
                  I&apos;m open to new opportunities, interesting projects, or a friendly tech chat.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button asChild>
                <a href="/contact">
                  Contact Me
                  </a>
                </Button>
                 <Button asChild variant="outline">
                  <a href="/projects">
                    View my Work
                  </a>
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}