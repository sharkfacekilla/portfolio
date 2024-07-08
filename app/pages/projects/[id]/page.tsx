import * as React from 'react';
import data from '../../../../public/projects.json'
import { Project } from '../../../utils/project';

export default function ProjectPage({params} : { 
    params: { id: string };
}) {
    //Get the project data to use on this page
    const projectData = data.projects.find((p) => p.id === params.id );

    return (
        <>
            <section className="h-screen relative">
                <div className="absolute inset-0 w-full h-screen">
                    <img src={projectData?.img} className="w-full h-full object-cover" alt="Background" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative container text-center mx-auto h-1/2 flex items-center justify-center">
                    <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl dark:text-light-blue mb-32 mt-80 text-shadow">{projectData?.name}</h1>
                </div>
            </section>
            <section className="h-screen relative">
                <div className="absolute inset-0 w-full">
                    <div className="mt-10 relative container text-center mx-auto h-1/2 items-center justify-center">
                        <h2 className="text-white text-3xl text-center text-shadow font-bold z-10 py-4 mx-auto mb-5">Project Description</h2>
                        <p className="mb-10">{projectData?.description}</p>
                        <p className="mb-10 -mt-5">Languages and Tools used: {projectData?.lang}</p>
                        <div>
                            <h3 className="text-white text-2xl text-center text-shadow font-bold z-10 py-4 mx-auto">Demo Video</h3>
                            <div className="justify-center items-center mt-10">
                                <iframe width="560" height="315" src={projectData?.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="justify-center items-center mx-auto"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
