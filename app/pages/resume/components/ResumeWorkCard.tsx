import { ResumeWorkProps } from "@/app/utils/app-types";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle, MapPin } from "lucide-react";

export default function ResumeWorkCard({ isVisible, work }: ResumeWorkProps) {
  if (!work) {
    return null;
  }
  return (
    <div
      className={`transition-all duration-1000 delay-1100 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {work.job_title}
              </h3>
              <p className="text-lg text-cyan-400 mb-2">{work.company}</p>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {work.start_date} - {work.end_date}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {work.location}
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{work.description}</p>
          {work.responsibilities && work.responsibilities.length > 0 && (
            <ul className="space-y-2">
              {work.responsibilities.map(
                (responsibility: string, respIndex: number) => (
                  <li key={respIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{responsibility}</span>
                  </li>
                )
              )}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
