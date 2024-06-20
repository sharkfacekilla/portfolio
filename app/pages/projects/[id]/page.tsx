import * as React from 'react';
import data from '../../../../public/projects.json'
import { Project } from '../../../utils/project';

export default function ProjectPage({params} : { 
    params: { id: string };
}) {
    //Get the project data to use on this page
    const projectData = data.projects.find((p) => p.id === params.id );

    return (
        <div>
            I WANT THE PROJECT DATA HERE BASED OFF THE COMPONENT!!!
            <h1>YEET
                {projectData?.name}
            </h1>
        </div>
    );
};

