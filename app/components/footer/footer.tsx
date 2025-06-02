import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

/**
 * Footer for site. Adapted from Flowbite https://flowbite.com/docs/components/footer/
 */

let year = () => {
  let year = new Date();
  return year.getFullYear();
};
let links = ["About", "Projects", "Resume", "Contact"];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 lg:px-12 py-8 mt-[-11rem] lg:mt-[-6rem]"> 
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
          © {year()} Gage Patenaude. All rights reserved.
        </div>

        {/* Navigation Links and Social Icons */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6"> {/* Use flex-col on mobile, flex-row on desktop */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {links.map((item) => (
              <Link
                key={item}
                href={`/pages/${item.toLowerCase()}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/gpatenaude94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn account</span>
            </Link>
            <Link
              href="https://www.github.com/sharkfacekilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
               <Github className="h-6 w-6" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="https://www.x.com/gpatenaude94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
