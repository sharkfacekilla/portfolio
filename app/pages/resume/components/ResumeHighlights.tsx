import { NavbarProps, ResumeHighlightsProps } from "@/app/utils/app-types";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export default function ResumeHighlights({
  isVisible,
  highlights,
}: ResumeHighlightsProps) {
  return (
    <>
      <div
        className={`transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Star className="h-6 w-6 mr-3 text-cyan-400" />
          Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{highlight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
