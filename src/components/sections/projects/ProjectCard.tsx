// components/projects/ProjectCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    status: string;
    course: string;
    date: string;
    highlights: string[];
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'default';
      case 'in progress':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white/40 backdrop-blur-sm border-white/60"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant={getStatusVariant(project.status)}>
            {project.status}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground gap-1">
            <Calendar className="h-3 w-3" />
            {project.date}
          </div>
        </div>
        
        <div className="space-y-1">
          <CardTitle className="text-lg group-hover:text-violet-600 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="flex items-center gap-1 text-violet-600 font-medium">
            <BookOpen className="h-3 w-3" />
            {project.course}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}