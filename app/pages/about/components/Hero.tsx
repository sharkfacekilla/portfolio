import { NavbarProps } from "@/app/utils/app-types";
import { User } from "lucide-react";
import React from "react";

/**
 * A hero image of me with a heading.
 * @returns Hero Section with background image.
 */
const AboutMe = ({ isVisible }: NavbarProps) => {
  return (
    <>
      <section className="relative z-10 px-6 lg:px-12 py-12 pt-44">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <User className="h-8 w-8 text-cyan-400" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                About Me.
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer who transforms ideas into
              digital reality, one line of code at a time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
