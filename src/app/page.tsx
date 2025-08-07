import Header from "@/components/sections/header/Header";
import Skills from "@/components/sections/skills/Skills";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import AboutSection from "@/components/sections/about/About";
import CodeTypingAnimation from "@/components/game/CodeTyping";

export default function Home() {


  
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