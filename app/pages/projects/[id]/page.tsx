"use client";
import * as React from "react";
import data from "../../../../public/projects.json";
import { Project } from "../../../utils/project";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import ProjectHero from "../comonents/Hero";
import ProjectDetails from "../comonents/Details";

/**
 * A dynamically generated page based on the project that's passed in.
 * @param param0 the project thats passed in.
 * @returns A dynamically generated page with the project information. Including video, image, text.
 */
export default function ProjectPage({ params }: { params: { id: string } }) {
  //Get the project data to use on this page
  const projectData = data.projects.find((p) => p.id === params.id);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true); // trigger animation once layout is mounted
  }, []);
  if (!projectData) {
    return <div>No Project Found</div>;
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
        <ProjectHero isVisible={isVisible} params={{ id: projectData.id }} />
        <ProjectDetails project={projectData} />
      </div>
    </>
  );
}
