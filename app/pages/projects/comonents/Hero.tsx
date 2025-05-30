import { Badge } from "@/components/ui/badge";
import data from "../../../../public/projects.json";
import { Calendar, Clock, Github, Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectParams {
  params: { id: string };
  isVisible: boolean;
}

export default function ProjectHero({ params, isVisible }: ProjectParams) {
  const project = data.projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>No Project Found</div>;
  }

  return (
    <>
      <section className="relative px-6 lg:px-12 py-12 pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <Badge className="bg-yellow-500 text-black">
                  <Clock className="h-3 w-3 mr-1" />
                  {project.status}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-cyan-400 text-cyan-400"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  {project.timeline}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-cyan-400 text-cyan-400"
                >
                  <Users className="h-3 w-3 mr-1" />
                  {project.team}
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {project.name}
              </h1>

              <p className="text-xl text-cyan-400 mb-6">{project.shortDesc}</p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-white/10 text-white border-white/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.youtubeLink && (
                  <Link href={project.youtubeLink} target="_blank">
                    <Button
                      size="lg"
                      className="bg-[#FF0000] hover:bg-[#cc0000] text-white"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch Demo on YouTube
                    </Button>
                  </Link>
                )}
                {project.githubLink && (
                  <Link href={project.githubLink} target="_blank">
                    <Button
                      size="lg"
                      className="bg-[#0d1117] text-cyan-400 border border-cyan-400 hover:bg-[#161b22]"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code on Github
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div
                className={`transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="relative">
                  <Card className="relative bg-white/5 border-white/10 overflow-hidden rounded-2xl">
                    <CardContent className="p-0 relative">
                      <div className="aspect-video relative">
                        <Image
                          src={project.img}
                          alt={
                            project.altTxt || `Screenshot of ${project.name}`
                          }
                          width={700}
                          height={400}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 blur-xl rounded-2xl z-10 pointer-events-none" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
