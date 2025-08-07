"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const projects = [
  {
    title: "Feistel Cipher Implementation",
    description: "Developed Feistel cipher encryption/decryption in Java for 8-bit and 16-bit block sizes using Galois Field arithmetic.",
    technologies: ["Java", "Cryptography", "Galois Field"],
    link: "/projects"
  },
  {
    title: "Mom and Pop Pizza Restaurant Software", 
    description: "Restaurant management system using Agile methodologies for small business operations.",
    technologies: ["Software Engineering", "UML", "Agile"],
    link: "/projects"
  },
  {
    title: "TCP Reverse Echo Server",
    description: "TCP server/client application in C# with multi-client connection handling and error management.",
    technologies: ["C#", ".NET", "TCP/IP"],
    link: "/projects"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto px-4 max-w-7xl py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col">
            <CardContent className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </section>
  );
}