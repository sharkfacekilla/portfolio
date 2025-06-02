"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Musician from "./components/Musician";
import { Metadata } from "next";
import Photography from "./components/Photographer";

// export const metadata: Metadata = {
//   title: "Gage Patenaude | About Me",
// };

/**
 * Displays different components related to me.
 * @returns an about page with components.
 */
const About = () => {
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
        <Hero isVisible={isVisible} />
        <section className="relative z-10 px-6 lg:px-12 pb-20">
            <div className="max-w-7xl mx-auto space-y-20">
                <Bio isVisible={isVisible} />
                <Musician isVisible={isVisible} />
                <Photography isVisible={isVisible}/>
            </div>
        </section>
      </div>
    </>
  );
};

export default About;
