import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface ProjectData {
  id: string;
  name: string;
  shortDesc: string;
  img: string;
  description: string;
  link: string;
  tech: string[];
  altTxt: string;
  skills: {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5"?: string;
  };
  status: string;
}

interface CustomCardProps {
  project: ProjectData;
}
/**
 * Renders the most recent object in the JSON. Includes image, name, short description, languages used, and a link to check out more information.
 * Uses custom props.
 * @param proj The project object, housing the information to render.
 * @returns Recent Project Card Component.
 */
const RecentProjectCard: React.FC<CustomCardProps> = ({ project }) => {
  //create the dynamic route for the Link component.
  const dynamicRoute = `/pages/projects/${project.id}`;

  return (
    <Card
      key={project.name}
      className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20
      }`}
    >
      <CardContent className="p-6 flex flex-col h-full">
        {" "}
        {/* Image Container */}
        <div className="aspect-video rounded-lg mb-4 overflow-hidden flex-shrink-0">
          {" "}
          {project.img ? (
            <img
              src={project.img} 
              alt={`Image for ${project.name}`}
              className="w-full h-full object-cover"
            />
          ) : (
            // Fallback if no image URL is provided
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-4xl">
              No Image Yet
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mb-2 flex-grow">
          {" "}
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <Badge
            variant={
              project.status === "Live"
                ? "default"
                : project.status === "In Progress"
                ? "secondary"
                : "outline"
            }
            className={
              project.status === "Live"
                ? "bg-green-500 text-white"
                : project.status === "In Progress"
                ? "bg-yellow-500 text-black"
                : "border-gray-400 text-gray-400"
            }
          >
            {project.status}
          </Badge>
        </div>
        <p className="text-gray-400 mb-4 flex-grow">{project.shortDesc}</p>{" "}
        <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
          {" "}
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs border-cyan-400/50 text-cyan-400"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Button
          variant="ghost"
          className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 mt-auto" /* Added mt-auto */
        >
          Learn More
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecentProjectCard;
