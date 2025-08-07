import { projectsData } from "@/components/data/projectsData";
import UpcomingProjectCard from "@/components/sections/projects/UpcomingProjectCard";

export function UpcomingProjectsSection() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Future Projects</h2>
        <p className="text-muted-foreground mt-2">
          Upcoming projects and ideas in development
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.upcoming.map((project, index) => (
          <UpcomingProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}