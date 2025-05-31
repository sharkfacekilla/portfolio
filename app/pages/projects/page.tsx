"use client";
import React, { useState, useEffect } from "react";
import CustomCard from "@/app/components/CustomCard";
import { Grid } from "@mui/material";
import { Project } from "@/app/utils/app-types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ProjectPageHero from "./comonents/ProjectPageHero";
import Image from "next/image";

/**
 *  Displaying the project landing page. Gets the projects from the JSON and displays accordingly.
 */
export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const [projects, setProjects] = useState<Project[]>([]);

  //Getting and Displaying projects with useEffect.
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();

        //display in descending order, most rescent first.
        const sortedProjects = data.projects.sort(
          (a: Project, b: Project) => b.id - a.id
        );

        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
          <div
            className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${
                mousePosition.y * -0.01
              }px)`,
            }}
          />
        </div>
        <ProjectPageHero isVisible={isVisible} />
        <section className="relative z-10 px-6 lg:px-12 pb-64">
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {projects.map((project, index) => (
                <Card
                  key={project.name}
                  className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 delay-${
                    index * 100
                  }`}
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
                          {project.tech.slice(0, 3).map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs border-white/20 text-gray-400"
                            >
                              {tech.technology}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge
                              variant="outline"
                              className="text-xs border-white/20 text-gray-400"
                            >
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-medium group-hover:bg-cyan-400 transition-all duration-300"
                        >
                          LEARN MORE
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-gray-400 hover:text-white hover:border-cyan-400"
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-gray-400 hover:text-white hover:border-cyan-400"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* <section className="relative py-12 overflow-x-hidden">
                <div className="container mx-auto text-center">
                    <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl text-light-blue mb-32 mt-28">Projects.</h1>
                </div>
                <div className="container mx-auto">
                    <Grid container spacing={3} justifyContent="center" alignItems="stretch" className="mx-auto">
                        {projects.map((project) => (
                            <Grid item xs={12} sm={6} md={5} lg={4} key={project.id} className="mb-32">
                                <CustomCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </section> */}
    </>
  );
}
