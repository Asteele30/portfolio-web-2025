import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface UpcomingProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    status: string;
  };
  index: number;
}

export default function UpcomingProjectCard({ project, index }: UpcomingProjectCardProps) {
  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white/30 backdrop-blur-sm border-white/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg group-hover:text-violet-600 transition-colors">
            {project.title}
          </CardTitle>
          <Badge variant="outline" className="border-violet-200 text-violet-700">
            <Sparkles className="h-3 w-3 mr-1" />
            {project.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
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