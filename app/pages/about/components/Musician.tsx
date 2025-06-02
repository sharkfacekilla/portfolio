import React from "react";
import Image from "next/image";
import { Spotify } from "react-spotify-embed";
import { ExternalLink, Headphones, Music, Play } from "lucide-react";
import { NavbarProps } from "@/app/utils/app-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

/**
 * Musician Component which includes a heading, a spotify embedded player, and some background information.
 * @returns Musiciaon Component.
 */
const Musician = ({ isVisible }: NavbarProps) => {
  return (
    <>
      <div
        className={`transition-all duration-1000 delay-900 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <Headphones className="h-8 w-8 mr-3 text-cyan-400" />
              Musical Journey
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Music has been my creative sanctuary since childhood. What began
                with picking up an electric guitar at age seven has evolved into
                a comprehensive musical journey spanning multiple instruments,
                composition, and production.
              </p>
              <p>
                During high school, I expanded into drums, which became pivotal
                in shaping my understanding of rhythm and musical structure.
                This foundation led me to form Supreme Remedy with fellow
                musicians, where we crafted original compositions and performed
                at local venues.
              </p>
              <p>
                Today, I continue pushing creative boundaries through music
                production, releasing tracks on platforms like Spotify. Music
                serves as both creative outlet and inspiration, often
                influencing my approach to problem-solving in development
                projects.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href={
                  "https://open.spotify.com/artist/3qAGAMat5YiJgibHf7F9rJ?si=XyyCZKLgQ7-AJc8Tx8J_VA"
                }
                target="_blank"
              >
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
                  <Play className="h-4 w-4 mr-2" />
                  Listen on Spotify
                </Button>
              </Link>
            </div>
          </div>

          <Card className="relative bg-transparent border-white/10 overflow-hidden h-[32rem] rounded-xl">
            <CardContent className="p-0">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/img/bandCover.JPG"
                  alt="Supreme Remedy Cover"
                  fill
                  className="object-cover filter grayscale"
                  priority
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                <h3 className="text-3xl font-semibold text-center">
                  Supreme Remedy
                </h3>
                <div>
                  <p className="text-sm text-gray-300 mb-3 text-center">
                    Latest Release: "Got Time"
                  </p>

                  <Spotify
                    link="https://open.spotify.com/album/63EBH2gtv9hVK0iu5t6snZ?si=dCetXGmjTfeFCYNxYoth8Q"
                    width="100%"
                    height={80}
                  />
                  <Link
                    href={
                      "https://open.spotify.com/album/63EBH2gtv9hVK0iu5t6snZ?si=dCetXGmjTfeFCYNxYoth8Q"
                    }
                    target="_blank"
                  >
                    <div className="mt-4 flex justify-center">
                      <Button
                        size="sm"
                        className="bg-[#1DB954] hover:bg-[#1AA34A] text-white"
                      >
                        <ExternalLink />
                        View on Spotify
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Musician;
