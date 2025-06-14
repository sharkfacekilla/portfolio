import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project } from "../utils/app-types";
import Image from "next/image";

interface CustomCardProps {
  project: Project;
}
/**
 * Renders the most recent object in the JSON. Includes image, name, short description, languages used, and a link to check out more information.
 * Uses custom props.
 * @param proj The project object, housing the information to render.
 * @returns Recent Project Card Component.
 */
const RecentProjectCard: React.FC<CustomCardProps> = ({ project }) => {
  return (
    <Card
      key={project.name}
      className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20
      }`}
    >
      <CardContent className="p-6 flex flex-col h-full">
        {" "}
        {/* Image Container */}
        <div className="aspect-video rounded-lg mb-4 overflow-hidden relative flex-shrink-0">
          {project.img ? (
            <Image
              src={project.img}
              alt={`Image for ${project.name}`}
              fill
              className="object-cover"
            />
          ) : (
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
          {/* Outer conditional check: ensure project.tech exists, is an array, and has items */}
          {project.tech &&
          Array.isArray(project.tech) &&
          project.tech.length > 0 ? (
            // Outer map: loop over the technology categories
            project.tech.map(
              (category, categoryIndex) =>
                // Inner conditional check: ensure technologies array exists and has items
                category.technology &&
                Array.isArray(category.technology) &&
                // Inner map: loop over the technologies within the current category
                category.technology.map((tech: string, index: any) => (
                  // Render a Badge for each individual technology
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-cyan-400/50 text-cyan-400"
                  >
                    {tech}
                  </Badge>
                ))
            )
          ) : (
            <span className="text-gray-400 text-xs italic">
              No technologies listed.
            </span>
          )}
        </div>
        <Link href={`/pages/projects/${project.id}`}>
          <Button className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 mt-auto">
            Learn More
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RecentProjectCard;
