"use client";
import data from "../../public/projects.json";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import React from "react";
import RecentProjectCard from "../components/RecentProjectCard";
import HeroSection from "../pages/home/components/Hero";
import RecentProjects from "../pages/home/components/RecentProjects";
import Contact from "../pages/home/components/Contact";

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
        <Contact isVisible={isVisible} />

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
