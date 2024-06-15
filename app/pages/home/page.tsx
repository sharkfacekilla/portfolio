import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
    return (
        <>
            <section>
                <div className="container mx-auto px-4">
                    <h1 className="mx-auto mt-32 mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl dark:text-light-blue">Gage Patenaude.</h1>
                    <h2 className="mx-auto mb-5 font-extrabold tracking-tight md:text-6xl sm: text-3xl dark:text-white/50">Building cool things.</h2>
                    <div className="w-full h-screen">
                        <p className="max-w-3xl">
                            Hello, and welcome to my portfolio!
                        </p>
                        <br />
                        <p className="max-w-3xl">
                            Learn a bit more about me and my projects here!
                        </p>
                        <Button variant="outlined">Yeet</Button>
                    </div>
                </div>
                <a href='https://pngtree.com/freepng/hand-painted-blue-technology-texture_5640849.html'>png image from pngtree.com/</a>
            </section>
        </>
    );
};

export default HomePage;
