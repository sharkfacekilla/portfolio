import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { NavbarProps } from "@/app/utils/app-types";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, ExternalLink } from "lucide-react";
import Link from "next/link";

/**
 * Displays a heading, some background, a link to flickr, and an image I took myself.
 * @returns Photography component.
 */
export default function Photography({ isVisible }: NavbarProps) {
  return (
    <>
      <div
        className={`transition-all duration-1000 delay-1100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-white/5 border-white/10 order-2 lg:order-1">
            <CardContent className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden relative border-4 border-white/10">
                <Image
                  src="/img/japan1.jpg"
                  alt="Featured Photography"
                  fill
                  priority
                />
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <Camera className="h-8 w-8 mr-3 text-cyan-400" />
              Through the Lens
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Photography represents my newest creative pursuit, born from
                witnessing my sister's artistic talent and feeling inspired to
                explore visual storytelling myself. What started as casual
                experimentation has grown into a genuine passion for capturing
                the world's beauty.
              </p>
              <p>
                I gravitate toward nature photography and street scenes, drawn
                to the challenge of finding extraordinary moments in ordinary
                settings. Long exposure shots and architectural photography
                particularly fascinate me, offering opportunities to play with
                light and perspective.
              </p>
              <p>
                Currently building my portfolio on Flickr, I'm working toward
                creating a dedicated web platform to showcase my photographic
                journey and share the stories behind each captured moment.
              </p>
            </div>
            <Link
              href={"https://www.flickr.com/photos/152106905@N06"}
              target="_blank"
            >
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Flickr Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
