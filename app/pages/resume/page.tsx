"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import ResumeHero from "./components/ResumeHero";
import { Resume, ResumeJsonData } from "@/app/utils/app-types";
import ResumeHighlights from "./components/ResumeHighlights";

/**
 * Resume Page.
 */
export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [resumeData, setResumeData] = useState<ResumeJsonData | null>(null);

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
        const data : ResumeJsonData = await response.json();
        setResumeData(data);
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
      <section className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <ResumeHero isVisible={isVisible} />
          {resumeData ? (
              <ResumeHighlights isVisible={isVisible} highlights={resumeData.resume.highlights} />
          ) : (
            <div className="text-gray-400 text-center py-10">Loading resume...</div>
          )}
        </div>
      </section>
    </div>
  );
}
