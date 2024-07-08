"use client"
import React, { useState, useEffect } from 'react';
import CustomCard from '@/app/components/CustomCard';
import { Grid } from '@mui/material';
import { promises as fs } from 'fs';
import { Project } from '@/app/utils/project';

// interface Project {
//     id: number;
// }

export default function page() {
    const [projects, setProjects] = useState<Project[]>([]); 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json');
                const data = await response.json();
                const sortedProjects = data.projects.sort((a: Project, b: Project) => b.id - a.id);

                setProjects(data.projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <section className="relative py-12">
                <div className="container mx-auto text-center">
                    <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl dark:text-light-blue mb-32 mt-28">Projects.</h1>
                </div>
                <div className="container mx-auto">
                    <Grid container spacing={3} justifyContent="center" alignItems="center" className="mx-auto">
                        {projects.map((project) => (
                            <Grid item xs={12} sm={6} md={5} lg={4} key={project.id} className="mb-32">
                                <CustomCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </section>
        </>
    );
}
