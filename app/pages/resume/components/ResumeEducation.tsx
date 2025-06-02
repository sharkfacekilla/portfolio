import { ResumeEducationProps } from "@/app/utils/app-types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle, GraduationCap, MapPin } from "lucide-react";

export default function ResumeEducation({
  isVisible,
  education,
}: ResumeEducationProps) {
  return (
    <>
      <div
        className={`transition-all duration-1000 delay-900 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {education.degree}
                </h3>
                <p className="text-lg text-white mb-2">{education.school}</p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {education.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Victoria, BC
                  </div>
                </div>
              </div>
              <Badge className="bg-green-500 text-white mt-4 lg:mt-0">
                {education.status}
              </Badge>
            </div>
            <ul className="space-y-3">
              {education.skills.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
