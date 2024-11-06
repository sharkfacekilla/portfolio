import React from "react";

/**
 * A hero image of me with a heading.
 * @returns Hero Section with background image.
 */
const AboutMe = () => {
    return (
        <>
            <section className=" h-screen/2 bg-gradient-to-r from-black to-transparent">
                <div className=" inset-0 h-screen/2 bg-aboutMe h-svh">
                    <div className="container grid grid-cols-2 content-center grid-rows-2 mx-auto px-4 h-full flex items-center justify-center">
                        <h1 className="text-white font-extrabold md:text-8xl text-5xl sm:text-3xl text-light-blue z-10 mt-auto py-4 col-span-full">Who Am I?</h1>
                    </div>
                </div>
            </section>
        </>
    );
};
export default AboutMe;
