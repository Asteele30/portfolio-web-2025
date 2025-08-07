import Header from "@/components/sections/header/Header";
import Skills from "@/components/sections/skills/Skills";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import AboutSection from "@/components/sections/about/About";
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
        <section className="container mx-auto px-4 max-w-7xl animate-fade-in">
          <Header />
        </section>
        <AboutSection />
        <CodeTypingAnimation />
       <div className="animate-fade-in-delayed">
       </div>
        <FeaturedProjects />
        <div className="container mx-auto px-4 max-w-7xl pb-24 animate-slide-up-delayed">
          <Skills />
        </div>
      </div>
    </main>
  );
}