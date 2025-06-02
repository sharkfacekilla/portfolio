"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import ResumeHero from "./components/ResumeHero";
import { Resume, ResumeJsonData, ResumeWork } from "@/app/utils/app-types";
import ResumeHighlights from "./components/ResumeHighlights";
import ResumeTechSkills from "./components/ResumeTechSkills";
import ResumeEducation from "./components/ResumeEducation";
import ResumeWorkCard from "./components/ResumeWorkCard";
import { Briefcase, GraduationCap } from "lucide-react";

/**
 * Resume Page.
 */
export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [resumeData, setResumeData] = useState<ResumeJsonData | null>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
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
        const data: ResumeJsonData = await response.json();
        setResumeData(data);
        setTimeout(() => setIsVisible(true), 200);
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
        <div className="max-w-7xl mx-auto space-y-12 pb-40">
          <ResumeHero isVisible={isVisible} />
          {resumeData ? (
            <>
              <ResumeHighlights
                isVisible={isVisible}
                highlights={resumeData.resume.highlights}
              />
              <ResumeTechSkills
                isVisible={isVisible}
                skills={resumeData.resume.technical_skills}
              />
              <h2
                className={`text-3xl font-bold mb-8 flex items-center transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <GraduationCap className="h-6 w-6 mr-3 text-cyan-400" />
                Education
              </h2>
              {resumeData.resume.education.map((entry, index) => (
                <ResumeEducation
                  key={entry.school + index}
                  isVisible={isVisible}
                  education={entry}
                />
              ))}
              <h2
                className={`text-3xl font-bold mb-8 flex items-center transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <Briefcase className="h-6 w-6 mr-3 text-cyan-400" />
                Work Experience
              </h2>
              {Object.values(resumeData.resume.work).map(
                (job: ResumeWork, index: number) => (
                  <ResumeWorkCard
                    key={job.company + index}
                    isVisible={isVisible}
                    work={job}
                  />
                )
              )}
            </>
          ) : (
            <div className="text-gray-400 text-center py-10">
              Loading resume...
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
