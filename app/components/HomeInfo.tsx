"use client"
import data from "../../public/projects.json";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ArrowRight,
  Download,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import RecentProjectCard from "../components/RecentProjectCard";
import Navbar from "./navbarr";
import Navigation from "./nav";

/**
 * Displays information on the home page.
 * @returns Home Info Component.
 */
export default function HomeInfo() {
  //Get the highest id within the project data, to automatically display most recent project.
  let highestId = data.projects.reduce(
    (max, project) => (parseInt(project.id) > parseInt(max.id) ? project : max),
    data.projects[0]
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
    const skills = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "TailwindCSS", icon: "🎨" },
  ]
    const projects = [
    {
      title: "GigPlanr",
      description: "Setlist Planning Web Application",
      status: "In Progress",
      tech: ["Laravel", "React", "TypeScript", "TailwindCSS", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills",
      status: "Live",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Task Manager Pro",
      description: "Advanced task management with team collaboration",
      status: "Completed",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden">
        {/* Animated background elements */}
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
  
        {/* Hero Section */}
        <section className="relative z-10 px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
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
                Building cool things with modern web technologies. Passionate
                about creating seamless user experiences and robust backend
                systems.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
                >
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
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

        {/* Projects Section */}
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
                {projects.map((project, index) => (
                  <Card
                    key={project.title}
                    className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 delay-${
                      index * 200
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-4xl">
                          {index === 0 ? "🎵" : index === 1 ? "💼" : "✅"}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
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

                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-cyan-400/50 text-cyan-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative z-10 px-6 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your next
                project.
              </p>

              <div className="flex justify-center space-x-6 mb-8">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  {
                    icon: Mail,
                    href: "mailto:gage@example.com",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </Link>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
              >
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 px-6 lg:px-12 py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Gage Patenaude. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {["About", "Projects", "Resume", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
