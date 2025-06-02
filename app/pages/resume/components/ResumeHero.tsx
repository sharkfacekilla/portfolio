import { NavbarProps, Resume } from "@/app/utils/app-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Download } from "lucide-react";
import resumeData from "@/public/resume.json";
import { useEffect, useState } from "react";

export default function ResumeHero({ isVisible }: NavbarProps) {
  return (
    <>
      <section className="relative z-10 px-6 lg:px-12 py-12 pt-44">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              } text-center lg:text-left`}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <Award className="h-8 w-8 text-cyan-400" />
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Resume.
                </h1>
              </div>
              <p className="text-xl text-gray-400 max-w-2xl">
                Software Developer with expertise in modern web technologies and
                a passion for creating exceptional user experiences.
              </p>
            </div>
            <Card
              className={`bg-white/5 border-white/10 transition-all duration-1000 delay-300 p-2 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Download className="h-5 w-5 mr-2 text-cyan-400" />
                  Download Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={"/gage-patenaude-resume.pdf"}
                  download="gage-patenaude-resume.pdf"
                >
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
