"use client"
import React, { useState, useEffect } from 'react';
import CustomCard from '@/app/components/CustomCard';
import { Grid } from '@mui/material';
import { promises as fs } from 'fs';
import { Project } from '@/app/utils/project';


export default function page() {
    const [projects, setProjects] = useState<Project[]>([]); // Assuming Project is the correct type

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/projects.json'); // Adjust the path as per your project structure
                const data = await response.json();
                setProjects(data.projects); // Assuming projects is an array in your JSON
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <section>
                <div className="container mx-auto px-4 h-screen flex items-center justify-center">
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {projects.map((project) => (
                            <Grid item key={project.id}>
                                <CustomCard id={project.id} image={project.img} altText={project.altTxt} lang={project.lang} title={project.name} description={project.shortDesc} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </section>
        </>
    );
}