import * as React from 'react';
import data from '../../../../public/projects.json'
import { Project } from '../../../utils/project';
import { Metadata } from "next";
import Head from 'next/head';
import Image from 'next/image';

/**
 * A dynamically generated page based on the project that's passed in.
 * @param param0 the project thats passed in.
 * @returns A dynamically generated page with the project information. Including video, image, text.
 */
export default function ProjectPage({params} : { 
    params: { id: string };
}) {
    //Get the project data to use on this page
    const projectData = data.projects.find((p) => p.id === params.id );

    return (
        <>
            {/* This currently doesn't work... */}
            <Head>
                <title>Gage Patenaude | Project - {projectData?.name}</title>   
            </Head>
            <section className="h-screen relative">
                <div className="absolute inset-0 w-full h-screen">
                    {/* Image */}
                    <Image layout="fill" src={projectData?.img || ''} className="w-full h-full object-cover" alt="Background" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative container text-center mx-auto h-1/2 flex items-center justify-center">
                    {/* Project Title */}
                    <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl text-light-blue mb-32 mt-80 text-shadow underline decoration-white/40">{projectData?.name}</h1>
                </div>
            </section>
            <section className="h-screen relative">
                <div className="absolute inset-0 w-full">
                    <div className="mt-10 relative container text-center mx-auto h-1/2 items-center justify-center">
                        {/* Project Description, Skills, Languages */}
                        <h2 className="text-white text-3xl text-center text-shadow font-bold z-10 py-4 mx-auto mb-5 underline decoration-light-blue">Project Description</h2>
                        <p className="mb-10">{projectData?.description}</p>
                        <h2 className="mx-auto mb-4 font-extrabold tracking-light text-3xl text-shadow lg:text-center text-center underline decoration-light-blue">Skills Learned & Used:</h2>
                        <ul className="list-disc list-inside mx-auto space-y-4 px-4 text-left max-w-lg mb-5">
                        {projectData?.skills && Object.values(projectData.skills).map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                        </ul>
                        <p className="mb-10 mt-5">Languages: {projectData?.lang}</p>
                        <div className='mb-24'>
                        {/* Video */}
                            <h3 className="text-white text-2xl text-center text-shadow font-bold z-10 py-4 mx-auto underline decoration-light-blue">Demo Video</h3>
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
