"use client";
import { useEffect, useState } from "react";
import { ContactForm } from "../../components/form";
import { Metadata } from "next";
import { Code2, Mail } from "lucide-react";

/**
 * Renders the form to send an email.
 * @returns Contact Form component.
 */
export default function ContactPage() {
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
          <div className="max-w-7xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center justify-center space-x-4 mb-6 pt-32 pt-44">
                <Mail className="h-8 w-8 text-cyan-400" />
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Contact Me.
                </h1>
              </div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto pb-10">
                {"Send me an email, and let's chat!"}
              </p>
            </div>
          </div>
          <div className="pointer-events-auto">
            <ContactForm isVisible={isVisible} />
          </div>
        </div>
      </div>
    </>
  );
}
