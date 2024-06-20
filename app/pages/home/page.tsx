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
The Capstone Project to the Information Computer Systems (ICS) program at Camosun had us work on this project here
                    </p>
                </div>
            </section>
        </>
    );
};

export default HomePage;
