import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
    return(
         <section className="flex items-center justify-center mx-auto px-4 max-w-7xl py-20">
          <Card className="max-w-5xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg
                           transform transition-all duration-700 hover:scale-105 hover:shadow-2xl
                           animate-slide-up group">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src="/profile3.jpg"
                      alt="Profile photo"
                      width={300}
                      height={300}
                      className="rounded-full object-cover shadow-xl border-4 border-white/30
                               transform transition-all duration-500 group-hover:scale-105
                               group-hover:border-purple-300/50"
                    />
                    {/* Optional decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 
                                  animate-ping-slow pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-extrabold text-gray-900 mb-6 
                               animate-text-shimmer bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 
                               bg-[length:200%_100%] bg-clip-text text-transparent">
                    Get to know me!
                  </h1>
                  <p className="text-lg leading-relaxed text-gray-900 pb-6 
                              transform transition-all duration-500 group-hover:text-gray-800">
                    I&apos;m a senior Computer Science student at Kennesaw State
                    University with a passion for web development and a curiosity for
                    cybersecurity. I love bringing ideas to life through code and
                    design.
                  </p>
                  <Button asChild variant="default" 
                         className="transform transition-all duration-300 hover:scale-110 
                                  hover:shadow-lg animate-pulse-soft">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
    )
}