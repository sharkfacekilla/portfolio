"use client";
import data from "../../public/projects.json";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Download,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import RecentProjectCard from "../components/RecentProjectCard";
import HeroSection from "../pages/home/components/Hero";
import RecentProjects from "../pages/home/components/RecentProjects";

/**
 * Displays information on the home page.
 * @returns Home Info Component.
 */
export default function HomeInfo() {
  const latestThreeProjects = data.projects.slice(-3).reverse();

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
        <HeroSection isVisible={isVisible} />

        {/* Projects Section */}
        <RecentProjects isVisible={isVisible} latestThreeProjects={latestThreeProjects} />
        
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
