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
  Music,
  BookOpen,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Developing web applications using React, Next.js, and Node.js. Working on both frontend and backend development.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
      title: "Student",
      company: "Kennesaw State University",
      period: "2022 - 2026",
      description:
        "Built enterprise applications using Java and C#. Collaborated with cross-functional teams to deliver high-quality software solutions.",
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
      name: "Coffee & Café Hopping",
      icon: Coffee,
      desc: "I love finding new caffeine rituals and quiet corners to code.",
      images: ["/images/coffee1.jpg", "/images/coffee2.jpg", "/images/coffee3.jpg"],
    },
    {
      name: "Reading & Nonfiction",
      icon: BookOpen,
      desc: "I read tech books, biographies, and the occasional sci-fi.",
      images: ["/images/books1.jpg", "/images/books2.jpg"],
    },
    {
      name: "Music & Playlists",
      icon: Music,
      desc: "I build playlists for coding sprints and chill afternoons.",
      images: ["/images/music1.jpg", "/images/music2.jpg", "/images/music3.jpg"],
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-20 pt-16 sm:pt-0">
          {/* Profile Image Carousel - smaller on mobile */}
          <div className="mx-auto mb-6 max-w-[180px] sm:max-w-[220px] md:max-w-xs rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-full"
            >
              {profileImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-square relative">
                    <Image
                      src={img}
                      alt={`Profile image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            About Me
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Get to know more about my journey, skills, and passion for creating meaningful
            digital experiences.
          </p>
        </div>

        {/* Main Content - Stack on mobile, grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left Column - Full width on mobile */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Bio Section */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/30">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">My Story</h2>
              <div className="prose prose-sm md:prose-base text-gray-700 space-y-3 md:space-y-4 max-w-none">
                <p>
                  Hi! I&apos;m a passionate full-stack developer with a love for creating clean,
                  efficient, and user-friendly applications.
                </p>
                <p>
                  I specialize in modern web technologies — React, Next.js, and Node.js — and I
                  pair that with solid fundamentals in Java, C#, and Python.
                </p>
                <p>
                  Outside of work, I enjoy learning new tools, contributing to small open-source
                  projects, and teaching others when I can.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/30">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Experience</h2>
              <div className="space-y-4 md:space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 md:pl-6 relative"
                    role="listitem"
                  >
                    <div className="absolute -left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 md:mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <span className="text-blue-600 text-sm md:text-base font-medium flex items-center mt-1 sm:mt-0">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base font-medium mb-2 md:mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs md:text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies Carousel Section */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/30">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">My Hobbies</h2>
              <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="rounded-xl overflow-hidden"
              >
                {hobbies.map((hobby) =>
                  hobby.images.map((img, idx) => (
                    <SwiperSlide key={`${hobby.name}-${idx}`}>
                      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`${hobby.name} image ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                          <h3 className="text-base md:text-lg font-bold text-white">{hobby.name}</h3>
                          <p className="text-xs md:text-sm text-white/80">{hobby.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            </div>
          </div>

          {/* Right Column - stack below on mobile */}
          <div className="mt-8 lg:mt-0 space-y-6 md:space-y-8">
            {/* Quick Info */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/30">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Quick Info</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center text-gray-700 text-sm md:text-base">
                  <MapPin size={18} className="mr-2 md:mr-3 text-blue-600" />
                  <span>Your City, Your Country</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm md:text-base">
                  <Code size={18} className="mr-2 md:mr-3 text-blue-600" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm md:text-base">
                  <Calendar size={18} className="mr-2 md:mr-3 text-blue-600" />
                  <span>Available for Projects</span>
                </div>
              </div>

              <Link href="/contact" className="block w-full mt-4 md:mt-6">
                <Button variant="default" className="w-full text-sm md:text-base">
                  Contact Me for my Resume
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/30">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Activity */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/30">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">GitHub Activity</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="w-full">
                  <img
                    src="https://ghchart.rshah.org/yourusername"
                    alt="GitHub contribution chart"
                    className="w-full rounded-lg bg-white/50 p-2"
                    style={{ minHeight: "100px" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-white/30 rounded-lg p-2 md:p-3">
                    <div className="text-base md:text-lg font-bold text-gray-900">150+</div>
                    <div className="text-xs text-gray-600">Commits</div>
                  </div>
                  <div className="bg-white/30 rounded-lg p-2 md:p-3">
                    <div className="text-base md:text-lg font-bold text-gray-900">25+</div>
                    <div className="text-xs text-gray-600">Repos</div>
                  </div>
                </div>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-xs md:text-sm font-medium"
                >
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View GitHub
                </a>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/30">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Interests</h3>
              <div className="space-y-2 md:space-y-3">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center text-gray-700 text-sm md:text-base"
                    >
                      <IconComponent size={18} className="mr-2 md:mr-3 text-blue-600" />
                      <span>{interest.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

  {/* Hobbies Carousel Section */}
  <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/30">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">My Hobbies in Pictures</h2>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="rounded-xl overflow-hidden"
    >
      {hobbies.map(hobby => 
        hobby.images.map((img, idx) => (
          <SwiperSlide key={`${hobby.name}-${idx}`}>
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={img}
                alt={`${hobby.name} image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{hobby.name}</h3>
                <p className="text-white/80 text-sm">{hobby.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  </div>
</div>

{/* Right Column - Stats & Info */}
<div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-3 text-blue-600" />
                  <span>Your City, Your Country</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Code size={20} className="mr-3 text-blue-600" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar size={20} className="mr-3 text-blue-600" />
                  <span>Available for Projects</span>
                </div>
              </div>

              {/* Contact for resume */}
              <Link href="/contact" className="block w-full mt-6">
                <Button variant="default">
                    Contact Me for my Resume
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Activity */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">GitHub Activity</h3>
              <div className="space-y-4">
                <div className="w-full">
                  <img
                    src="https://ghchart.rshah.org/yourusername"
                    alt="GitHub contribution chart"
                    className="w-full rounded-lg bg-white/50 p-2"
                    style={{ minHeight: "120px" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-white/30 rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-900">150+</div>
                    <div className="text-xs text-gray-600">Commits</div>
                  </div>
                  <div className="bg-white/30 rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-900">25+</div>
                    <div className="text-xs text-gray-600">Repos</div>
                  </div>
                </div>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View GitHub
                </a>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interests</h3>
              <div className="space-y-3">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon;
                  return (
                    <div key={index} className="flex items-center text-gray-700">
                      <IconComponent size={20} className="mr-3 text-blue-600" />
                      <span>{interest.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hobbies</h3>
              <div className="space-y-4">
                {hobbies.map((hobby, index) => {
                  const IconComponent = hobby.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <IconComponent size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{hobby.name}</div>
                        <div className="text-sm text-gray-700">{hobby.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 border border-white/30 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s Work Together</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}