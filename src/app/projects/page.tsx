// app/projects/page.tsx
"use client";


import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { AcademicProjectsSection } from "@/components/sections/projects/AcademicProjects";
import { UpcomingProjectsSection } from "@/components/sections/projects/UpcomingProjects";

export default function ProjectsPage() {
  return (
    <div className="page-content min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4 max-w-7xl space-y-16">
        <PageHeader
          title="My Projects"
          description="A collection of academic projects and coursework demonstrating technical skills in cryptography, software engineering, and network programming."
        />
        <AcademicProjectsSection />
        <UpcomingProjectsSection />
        <CTASection 
          title="Let's Build Something Together"
          description="While my portfolio projects are in development, I'm actively learning and ready to take on new challenges. Whether you have an idea for a project or want to collaborate, I'd love to connect!"
          primaryButton={{ text: "Get In Touch", href: "/contact" }}
          secondaryButton={{ text: "Learn More About Me", href: "/about" }}
        />
      </div>
    </div>
  );
}





