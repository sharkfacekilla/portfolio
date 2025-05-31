import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

export default function YouTubeVideo({ youtubeLink }: { youtubeLink: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function extractVideoId(url: string) {
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  }
  const videoId = extractVideoId(youtubeLink);

  return (
    <>
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Demo Video</h3>

          <div className="aspect-video rounded-lg overflow-hidden relative bg-gradient-to-br from-slate-800 to-slate-900">
            {!isPlaying && videoId && (
              <div
                className="relative flex flex-col items-center justify-center text-center cursor-pointer h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
                }}
                onClick={() => setIsPlaying(true)}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 px-6">
                  <Play
                    className="h-16 w-16 mx-auto mb-4 text-cyan-400"
                    onClick={() => setIsPlaying(true)}
                  />
                </div>
              </div>
            )}

            {isPlaying && videoId && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="GigPlanr Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {!videoId && (
              <div className="flex items-center justify-center h-full bg-gray-800 text-white">
                <p>Invalid YouTube Link</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
