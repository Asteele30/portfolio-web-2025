import { projectsData } from "@/components/data/projectsData";
import ProjectCard from "@/components/sections/projects/ProjectCard";

export function AcademicProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
          Academic & Course Projects
        </h2>
        <p className="text-muted-foreground mt-2">
          Projects completed during my computer science coursework
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectsData.academic.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}