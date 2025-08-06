import Header from "@/components/sections/header/Header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/sections/footer/Footer";
import Skills from "@/components/sections/skills/Skills";
import Image from "next/image";

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
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
      <div className="flex-grow">
        {/* Hero */}
        <section className="container mx-auto px-4 max-w-7xl">
          <Header />
        </section>

        {/* About intro */}
        <section className="flex items-center justify-center mx-auto px-4 max-w-7xl py-20">
          <Card className="max-w-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
            <CardContent className="p-6">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
                Get to know me!
              </h1>
              <p className="text-lg leading-relaxed text-gray-900 pb-4">
                I&apos;m a senior Computer Science student at Kennesaw State
                University with a passion for web development and a curiosity for
                cybersecurity. I love bringing ideas to life through code and
                design.
              </p>
              <Button asChild variant="default">
                <Link href="/about">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 max-w-7xl py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-white/30 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="default">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Skills */}
        <div className="container mx-auto px-4 max-w-7xl pb-24">
          <Skills />
        </div>
      </div>
      
      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild className="rounded-full p-0" size="sm">
          <Link href="/contact" className="inline-flex items-center px-4 py-3">
            Let&apos;s Chat!
          </Link>
        </Button>
      </div>
    </main>
  );
}