import { NavbarProps } from "@/app/utils/app-types";
import { Code2 } from "lucide-react";

export default function ProjectPageHero({isVisible}: NavbarProps) {
  return (
    <>
      <section className="relative z-10 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center space-x-4 mb-6 pt-32">
              <Code2 className="h-8 w-8 text-cyan-400" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Projects.
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development,
              mobile apps, and game development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
