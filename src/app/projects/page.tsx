"use client";

import { useState } from "react";
import { ExternalLink, Github, Calendar, Filter, Search } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js, featuring glassmorphism design and smooth animations.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "/project-placeholder-1.jpg",
      date: "2025",
      status: "Live",
      category: "Web Development"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "/project-placeholder-2.jpg",
      date: "2024",
      status: "In Development",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "/project-placeholder-3.jpg",
      date: "2024",
      status: "Live",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and beautiful data visualizations.",
      technologies: ["Python", "Flask", "JavaScript", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "/project-placeholder-4.jpg",
      date: "2024",
      status: "Completed",
      category: "Data Visualization"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "C# desktop application for analyzing social media metrics with advanced reporting features.",
      technologies: ["C#", ".NET", "WPF", "SQL Server"],
      liveUrl: null,
      githubUrl: "#",
      imageUrl: "/project-placeholder-5.jpg",
      date: "2023",
      status: "Completed",
      category: "Desktop App"
    },
    {
      id: 6,
      title: "Code Snippet Manager",
      description: "A developer tool for organizing and sharing code snippets with syntax highlighting and search functionality.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "/project-placeholder-6.jpg",
      date: "2023",
      status: "Live",
      category: "Developer Tools"
    }
  ];

  const categories = ["All", "Web Development", "Full Stack", "Data Visualization", "Desktop App", "Developer Tools"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Completed":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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
            A curated collection of my development work, showcasing innovative solutions
            and technical expertise across various domains and technologies.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-12">
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/70 transition-all"
                />
              </div>
              
              {/* Category Filters */}
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        filter === category
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-white/60 text-gray-700 hover:bg-white/80"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/25 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden border border-white/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Overlay */}
              <div className="h-48 bg-gradient-to-br from-violet-400 via-blue-500 to-cyan-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <span className="text-white/80 text-sm bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Status and Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-xs rounded-full font-medium border border-blue-200/50"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium flex-1 justify-center shadow-lg hover:shadow-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all text-sm font-medium flex-1 justify-center shadow-lg hover:shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 border border-white/30 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-2xl p-12 border border-white/40 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                I'm passionate about creating innovative solutions and bringing creative ideas to life. 
                Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get In Touch
                </a>
                <a
                  href="#about"
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