import Image from "next/image";

export default function Skills() {
const skills = [
  { name: "React*", src: "/react-svgrepo-com.svg", alt: "React Logo" },
  { name: "Node.js*", src: "/node-js-svgrepo-com.svg", alt: "Node.js Logo" },
  { name: "Tailwind CSS*", src: "/tailwind-svgrepo-com.svg", alt: "Tailwind CSS Logo" },
  { name: "TypeScript*", src: "/typescript-16-svgrepo-com.svg", alt: "TypeScript Logo" },
  { name: "Next.js*", src: "/next-js-svgrepo-com.svg", alt: "Next.js Logo" },

  { name: "Java", src: "/java-svgrepo-com.svg", alt: "Java Logo" },
  { name: "C#", src: "/csharp-svgrepo-com.svg", alt: "C# Logo" },
  { name: "Python", src: "/python-svgrepo-com.svg", alt: "Python Logo" },
  { name: "Git", src: "/git-merge-svgrepo-com.svg", alt: "Git Logo" },
];

  return (
    <section className="container mx-auto px-4 max-w-7xl py-20 bg-white/10 rounded-lg backdrop-blur-md shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/20 p-6 rounded-lg shadow-md w-32 h-32 flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-default"
            title={skill.name}
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              width={64}
              height={64}
              className="mb-3 object-contain"
              priority
            />
            <span className="text-gray-900 font-semibold text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-700 mt-6 text-sm">* used on this website</p>
    </section>
  );
}