import * as React from 'react';
import data from '../../../../public/projects.json'
import { Project } from '../../../utils/project';

export default function ProjectPage({params} : { 
    params: { id: string };
}) {
    //Get the project data to use on this page
    const projectData = data.projects.find((p) => p.id === params.id );

    return (
        <div className="relative h-screen">
          <section className="h-3/5 relative">
            <img src={projectData?.img} className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Background" />
            <div className="container mx-auto px-4 flex h-full">
            <h1 className="text-white text-5xl font-bold z-10 py-4 mt-20 col-span-full mx-auto mb-5 text-shadow">
            {projectData?.name}
              </h1>
            </div>
          </section>
          <section className="h-2/5">
            <div className="container mx-auto px-4 flex items-center justify-center h-full">
              <div className="text-white text-3xl font-bold">
                Content goes here
              </div>
            </div>
          </section>
        </div>
      );
    };      
