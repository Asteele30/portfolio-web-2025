// pages/about.tsx or app/about/page.tsx
"use client";

import { Code, Coffee, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CTASection from "@/components/sections/CTASection";
import BioSection from "@/components/sections/about/BioSection";
import ExperienceSection from "@/components/sections/about/ExperienceSection";
import HobbiesSection from "@/components/sections/about/HobbiesSection";
import StatsCard from "@/components/sections/about/StatsCard";
import QuickInfoCard from "@/components/sections/about/QuickInfoCard";
import GitHubCard from "@/components/sections/about/GitHubCard";
import InterestsCard from "@/components/sections/about/InterestsCard";
import AnimatedBackground from "@/components/sections/about/AnimatedBackground";
import { BannerCarouselHeader } from "@/components/sections/about/ProfileHeader";

interface ProfileHeaderProps {
  profileImages: string[];
}


export default function AboutPage() {
  // Data constants
  const profileImages = ["/profile1.jpg", "/profile2.jpg", "/profile3.jpg"];

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
      description: "Bachelor's Degree in Computer Science",
      technologies: ["Java", "C#", "Python", "SQL"],
    },
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

  const interests = [
    { name: "Web Development", icon: Code },
    { name: "Problem Solving", icon: Coffee },
    { name: "Open Source", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 md:py-16 flex justify-center relative overflow-hidden">
      <AnimatedBackground />

      <div className="w-full max-w-5xl px-4 relative z-10">
        <div className="text-center mb-8 md:mb-20 pt-20 sm:pt-24 lg:pt-28">
          <BannerCarouselHeader profileImages={profileImages} />

          {/* Main layout: stacked on mobile, grid on large screens */}
          <main className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Left: main content span 2 on lg */}
            <section className="lg:col-span-2 space-y-6">
              <BioSection />
              <ExperienceSection experiences={experiences} />
              <HobbiesSection hobbies={hobbies} />
            </section>

            {/* Right column */}
            <aside className="space-y-6">
              <StatsCard stats={stats} />
              <QuickInfoCard />
              <GitHubCard />
              <InterestsCard interests={interests} />
            </aside>
          </main>

          <CTASection 
            title="Ready to Collaborate?"
            description="I'm always excited to work on new projects and learn from experienced developers. Let's create something amazing together!"
            primaryButton={{ text: "View My Projects", href: "/projects" }}
            secondaryButton={{ text: "Get In Touch", href: "/contact" }}
          />
        </div>
      </div>
    </div>
  );
}