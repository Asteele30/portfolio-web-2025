import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

export default function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <div className="p-4">
      <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <Card className="bg-white border-0 rounded-lg">
        <CardContent className="p-8 md:p-12 text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 border-0">
              <a href={primaryButton.href}>
                {primaryButton.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-pink-200 hover:border-pink-400 text-pink-700 hover:text-pink-800">
              <a href={secondaryButton.href}>
                {secondaryButton.text}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}