import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  isVisible: boolean;
}

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TailwindCSS", icon: "🎨" },
];


export default function HeroSection({ isVisible }: NavbarProps) {
  return (
    <section className="relative z-10 px-6 lg:px-12 py-32 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-medium">
              Available for work
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Gage Patenaude
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-2xl">
            Full-Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Building cool things with modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
            >
              <Link href="/pages/projects">
                View My Work
              </Link>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <a href="../gage-patenaude-resume.pdf" download="gage-patenaude-resume.pdf">
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r from-zinc-800 to-blue-500 hover:from-zinc-950 hover:to-blue-600 text-white hover:text-white font-semibold"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
              </a>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className={`bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 delay-${
                  index * 100
                }`}
              >
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
