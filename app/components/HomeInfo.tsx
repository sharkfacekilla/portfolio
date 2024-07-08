import data from '../../public/projects.json';
import { Button, Grid } from "@mui/material";
import React from "react";
import RecentProjectCard from '../components/RecentProjectCard';


/**
 * Displays information on the home page.
 * @returns Home Info Component.
 */
export default function HomeInfo() {
    let highestId = data.projects.reduce((max, project) =>
        parseInt(project.id) > parseInt(max.id) ? project : max, data.projects[0]);

    return (
        <>
            <section className="h-2/6">
                <div className="container mx-auto px-4 mb-20">
                    <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl dark:text-light-blue mt-32">Gage Patenaude.</h1>
                    <h2 className="mx-auto mb-5 font-extrabold tracking-tight md:text-6xl sm: text-3xl dark:text-white/50">Building cool things.</h2>
                    <div>
                        <p className="max-w-3xl">Hello, and welcome to my portfolio!</p>
                            <br />
                        <p className="max-w-3xl">Learn a bit more about me and my projects here!</p>
                        <Button href={"pages/about"} variant="contained" className="mt-4 bg-blue text-white hover:bg-light-blue border">About Me</Button>
                    </div>
                </div>
                <div className="container mx-auto mb-5 px-4 h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold z-10 py-4 col-span-full mx-auto mb-5 border-b">Recent Project</h1>
                </div>
                <div className="container mx-auto mb-10 px-4 h-full flex items-center justify-center">
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item>
                            <RecentProjectCard proj={highestId.id} />
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    );
};
