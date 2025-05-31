"use client";
import React, { useState, useEffect } from "react";

import { Project } from "@/app/utils/app-types";

import ProjectPageHero from "./comonents/ProjectPageHero";
import ProjectPageGrid from "./comonents/ProjectPageGrid";

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
        setProjects(
          [...data.projects].sort((a: Project, b: Project) => parseInt(b.id) - parseInt(a.id))
        );
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
        <ProjectPageGrid isVisible={isVisible} projects={projects} />
      </div>
    </>
  );
}
