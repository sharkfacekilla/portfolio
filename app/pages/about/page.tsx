import React from "react";
import Head from "next/head";
import Hero from "./Hero";
import Bio from "./Bio";
import Musician from "./Musician";
import { Metadata } from "next";
import Photography from "./Photographer";

export const metadata: Metadata = {
    title: "Gage Patenaude | About Me",
};

/**
 * Displays different components related to me.
 * @returns an about page with components.
 */
const About = () => {
    return (
        <>
            <Hero />
            <Bio />
            <Musician />
            <Photography />
        </>
    );
};

export default About;
