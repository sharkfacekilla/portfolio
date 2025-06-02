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
import Footer from "./footer/footer";

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
        <HeroSection isVisible={isVisible} />
        <RecentProjects isVisible={isVisible} latestThreeProjects={latestThreeProjects} />
        <Contact isVisible={isVisible} />
      </div>
    </>
  );
}
