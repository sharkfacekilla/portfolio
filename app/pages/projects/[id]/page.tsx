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
            <section className="h-screen">
                <div className='container'>
                    <div className="relative">
                    <img src={projectData?.img} className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Background" />
                        </div>
                
                    <h1 className="text-white text-4xl text-center text-shadow font-bold z-10 py-4 col-span-full mx-auto mb-5">{projectData?.name}</h1>
                    
                </div>
            </section>
        </>
    );
};      
