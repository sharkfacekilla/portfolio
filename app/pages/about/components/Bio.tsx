import React from "react";
import Image from "next/image";
import { NavbarProps } from "@/app/utils/app-types";
import {
  Calendar,
  Coffee,
  Heart,
  MapPin,
  Target,
  User,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Renders a bio component. Includes heading, background, and image.
 * @returns Biography Component.
 */
const values = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Precision",
    description: "Every line of code matters, every pixel counts",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Innovation",
    description: "Embracing cutting-edge technologies and methodologies",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Passion",
    description:
      "Genuine enthusiasm for creating meaningful digital experiences",
  },
];
export default function Bio({ isVisible }: NavbarProps) {
  return (
    <>
      {/* Introduction */}
      <div
        className={`transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              The Journey So Far
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Since discovering my first computer at age three, technology has
                been the driving force behind my curiosity and creativity. What
                started as childhood fascination with how things work has
                evolved into a deep passion for building digital solutions that
                make a real difference.
              </p>
              <p>
                As a recent graduate from Camosun College's Information &
                Computer Systems program, I've immersed myself in the world of
                full-stack development, mastering technologies like React,
                Laravel, and modern web frameworks. But my journey extends far
                beyond just writing code—it's about crafting experiences that
                users love and solving problems that matter.
              </p>
              <p>
                When I'm not debugging code or architecting new features, you'll
                find me creating music, capturing moments through photography,
                or exploring the latest technological innovations. I believe
                that diverse interests fuel creativity, and creativity drives
                innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <MapPin className="h-4 w-4" />
                <span>Victoria, BC</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Calendar className="h-4 w-4" />
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Coffee className="h-4 w-4" />
                <span>Fueled by curiosity</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center my-auto">
            <Card className="bg-white/5 border-white/10 rounded-full overflow-hidden shadow-lg p-4">
              <CardContent className="p-0">
                <div className="w-60 h-60 relative rounded-full overflow-hidden border border-cyan-500 shadow-[0_0_25px_2px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_4px_rgba(0,255,255,0.5)] transition-shadow duration-300">
                  <Image
                    src={"/img/me1.jpeg"}
                    layout="fill"
                    objectFit="cover"
                    alt={"profile picture of me"}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-cyan-400">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
