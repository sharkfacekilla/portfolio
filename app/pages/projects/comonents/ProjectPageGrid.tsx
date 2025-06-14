import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button as Button2 } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Button from "@mui/material/Button";
import CustomCard from "@/app/components/CustomCard";
import { Grid } from "@mui/material";

import Image from "next/image";
import { NavbarProps, Project } from "@/app/utils/app-types";
import Link from "next/link";

export default function ProjectPageGrid({ isVisible, projects }: NavbarProps) {
  return (
    <>
      <section className="relative z-10 px-6 lg:px-12 pb-64">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {projects &&
              projects.map((project, index) => (
                <Card
                  key={project.name}
                  className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 delay-${100}`}
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <div className="text-center">
                          {/* <div className="text-4xl mb-2">{project.icon}</div> */}
                          <Image
                            src={project.img}
                            alt={project.altTxt}
                            fill
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/20 blur-xl rounded-2xl z-10 pointer-events-none" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant={
                            project.status === "Live"
                              ? "default"
                              : project.status === "In Progress"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            project.status === "Live"
                              ? "bg-green-500 text-white"
                              : project.status === "In Progress"
                              ? "bg-yellow-500 text-black"
                              : "border-gray-400 text-gray-400"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        {/* <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-black/50">
                        {project.year}
                      </Badge> */}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="mb-3">
                        {/* <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 text-xs mb-2">
                        {project.category}
                      </Badge> */}
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {project.shortDesc}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.flatMap(t => t.technology)
                          .slice(0, 3).map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs border-white/20 text-gray-400"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.flatMap(t=> t.technology).length > 3 && (
                            <Badge
                              variant="outline"
                              className="text-xs border-white/20 text-gray-400"
                            >
                              +{project.tech.flatMap(t => t.technology).length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Link
                          href={`/pages/projects/${project.id}`}
                          className="block w-full"
                        >
                          <Button className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 mt-auto bg-black/20">
                            LEARN MORE
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </Link>
                        {project.githubLink &&
                        <Link href={project.githubLink} target="_blank">
                          <Button2
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-gray-400 hover:text-white hover:border-cyan-400"
                          >
                            <Github className="h-3 w-3" />
                          </Button2>
                        </Link>
                        }
                        {project.demoLink &&
                        <Link href={project.demoLink} target="_blank">
                          <Button2
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-gray-400 hover:text-white hover:border-cyan-400"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button2>
                        </Link>
                        }
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
