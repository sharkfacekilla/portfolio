"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import ResumeHero from "./components/ResumeHero";
import { Resume } from "@/app/utils/app-types";

/**
 * Resume Page.
 */
export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [resume, setResume] = useState<Resume[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

    useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch("/resume.json");
        const data = await response.json();
        setResume(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching resume", err);
      }
    };
    fetchResume();
  }, []);

  return (
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
      <ResumeHero isVisible={isVisible} />
    </div>
  );
}
