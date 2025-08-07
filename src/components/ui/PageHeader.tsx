interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center space-y-4">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight pb-2">
          {title}
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
      </div>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}