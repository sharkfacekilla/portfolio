import RecentProjectCard from "@/app/components/RecentProjectCard";
import { Code2 } from "lucide-react";
import { Project }from "@/app/utils/app-types" ;


interface RecentProjectsProps {
  isVisible: boolean;
  latestThreeProjects: Project[];
};

export default function RecentProjects({
  isVisible,
  latestThreeProjects,
}: RecentProjectsProps) {
  return (
    <>
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center space-x-4 mb-12">
              <Code2 className="h-8 w-8 text-cyan-400" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Featured Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestThreeProjects &&
              Array.isArray(latestThreeProjects) &&
              latestThreeProjects.length > 0 ? (
                latestThreeProjects.map((project, index) => (
                  <RecentProjectCard
                    key={project.id || index}
                    project={project}
                  />
                ))
              ) : (
                // Fallback if no projects to display
                <div className="text-gray-400 col-span-full text-center">
                  No featured projects available.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
