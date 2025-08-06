import Header from "@/components/sections/header/Header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/sections/footer/Footer";
import Skills from "@/components/sections/skills/Skills";
import Image from "next/image";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import UnderConstruction from "@/components/sections/construction/UnderConstruction";
import UnderConstructionSection from "@/components/sections/construction/UnderConstruction";
import AboutSection from "@/components/sections/About";
import CodeTypingAnimation from "@/components/game/CodeTyping";

export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Next.js, and Stripe integration.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/images/ecommerce-project.jpg",
      link: "/projects/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features and drag-and-drop interface.",
      technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      image: "/images/task-app.jpg",
      link: "/projects/task-manager"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with responsive design.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/images/portfolio-project.jpg",
      link: "/projects/portfolio"
    }
  ];

  
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 relative overflow-hidden">

      <div className="flex-grow relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 max-w-7xl animate-fade-in">
          <Header />
        </section>
        <AboutSection />
        <CodeTypingAnimation />
       <div className="animate-fade-in-delayed">
         <UnderConstructionSection sectionName="Projects Section" />
       </div>

        {/* Skills */}
        <div className="container mx-auto px-4 max-w-7xl pb-24 animate-slide-up-delayed">
          <Skills />
        </div>
      </div>
      
      {/* Floating chat button with enhanced animations */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild className="rounded-full p-0 transform transition-all duration-300 
                                 hover:scale-110 hover:rotate-3 hover:shadow-xl
                                 animate-float bg-gradient-to-r from-purple-500 to-pink-500
                                 hover:from-purple-600 hover:to-pink-600" size="sm">
          <Link href="/contact" className="inline-flex items-center px-4 py-3">
            <span className="animate-bounce">💬</span>
            <span className="ml-2">Let&apos;s Chat!</span>
          </Link>
        </Button>
      </div>

    </main>
  );
}