"use client";

import { useState } from "react";
import { Code, Coffee, Sparkles, ArrowRight, Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const academicProjects = [
    {
      title: "Feistel Cipher Implementation",
      description: "Developed Feistel cipher encryption/decryption in C# for 8-bit and 16-bit block sizes. Utilized Galois Field arithmetic with irreducible polynomials for core cryptographic functions.",
      technologies: ["Java", "Cryptography", "Galois Field", "File I/O"],
      status: "Completed",
      course: "Cryptography Course",
      date: "Spring 2025",
      highlights: ["Custom GF multiplication", "Modular inverse functions", "Key expansion", "Hexadecimal verification"]
    },
    {
      title: "Mom and Pop Pizza Restaurant Software",
      description: "Contributed to a simulated restaurant management system tailored to small business operations. Produced detailed documentation and participated in UI planning using Agile methodologies.",
      technologies: ["Software Engineering", "UML", "Agile", "Documentation"],
      status: "Completed",
      course: "SWE 3313 Course Project",
      date: "Spring 2024",
      highlights: ["Requirements analysis", "User stories", "UML diagrams", "Agile development"]
    },
    {
      title: "TCP Reverse Echo Server and Client",
      description: "Created a TCP server/client application in C# using the .NET socket library. Managed multi-client connections and implemented error handling for socket reliability.",
      technologies: ["C#", ".NET", "TCP/IP", "Socket Programming"],
      status: "Completed",
      course: "Data Communications Course",
      date: "Spring 2025",
      highlights: ["Multi-client handling", "String encoding", "Buffer management", "Real-time debugging"]
    }
  ];

  const upcomingProjects = [
    {
      title: "Portfolio Enhancement",
      description: "Adding more interactive features and animations to showcase my development skills. I am also adding a way to check out my projects through this page!",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      status: "In Planning"
    },
    {
      title: "Full-Stack Web Application",
      description: "Building a modern web app with user authentication and real-time features",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      status: "Coming Soon"
    }
  ];

  return (
    <div className="page-content min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Animated Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of academic projects and coursework demonstrating technical skills 
            in cryptography, software engineering, and network programming.
          </p>
        </div>

        {/* Academic Projects Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-12">
            Academic & Course Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {academicProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium border border-green-200 sm:text-center">
                    {project.status}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">{project.date}</span>
                </div>
                
                <h4 className="font-bold text-gray-800 text-xl mb-2">{project.title}</h4>
                <p className="text-violet-600 text-sm font-medium mb-3">{project.course}</p>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-xs rounded-full font-medium border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Future Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/25 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-800 text-lg">{project.title}</h4>
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs rounded-full font-medium border border-violet-200">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-xs rounded-full font-medium border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-3xl p-12 border border-white/40 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-black mb-6">
                Let&apos;s Build Something Together
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                While my portfolio projects are in development, I&apos;m actively learning and ready to take on new challenges. 
                Whether you have an idea for a project or want to collaborate, I&apos;d love to connect! If you would like to see the project or a demo, please fill out the contact form and I will reach out to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get In Touch
                  <ArrowRight size={18} />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/50 text-gray-700 rounded-xl hover:bg-white/70 transition-all font-medium border border-white/60"
                >
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}