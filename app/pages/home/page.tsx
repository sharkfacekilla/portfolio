import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
    return (
        <>
        <section className="h-2/6">
        <div className="container mx-auto px-4 mb-20">
        <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl dark:text-light-blue mt-32">Gage Patenaude.</h1>
                    <h2 className="mx-auto mb-5 font-extrabold tracking-tight md:text-6xl sm: text-3xl dark:text-white/50">Building cool things.</h2>
                    <div>
                        <p className="max-w-3xl">
                            Hello, and welcome to my portfolio!
                        </p>
                        <br />
                        <p className="max-w-3xl">
                            Learn a bit more about me and my projects here!
                        </p>
                        
                    <Button href={"pages/about"} variant="contained" className="mt-4 bg-blue text-white hover:bg-light-blue border">About Me</Button>
                    </div>
                </div>
                </section>
                <section className=" h-3/6">
                <div className="container mx-auto mb-80 px-4 h-full grid grid-cols-2 grid-rows-2 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold z-10 py-4 col-span-full mx-auto mb-5 border-b">Recent Project</h1>
                    <p className="text-white">
                        I am an aspiring computer scientist who enjoys a new
                        challenges: be it learning something new, or solving an
                        issue that people before me have tried. I have strong
                        technical skills and an academic background in
                        programming, web building and design. My passion lies in
                        having that "a-ha" moment when solving problems, using
                        tools that I have learned how to use in my academic and
                        professional journey. In my studies, I've worked in a
                        team environment, as well as on my own, creating
                        different project. I'm graduating in 2025, and
                        interested in a full-time development career. I also
                        have interests in music, and photography. I have listed
                        some of my personal passions below.
                    </p>
                </div>
            </section>
        </>
    );
};

export default HomePage;
