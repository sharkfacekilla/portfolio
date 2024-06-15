import React from "react";
import Image from "next/image";

export default function Bio() {
    return (
        <>
            <section className=" h-3/6">
                <div className="container mx-auto mb-80 px-4 h-full grid grid-cols-2 grid-rows-2 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold z-10 py-4 col-span-full mx-auto mb-5 border-b">Who Am I?</h1>
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
                    <div className="flex items-center justify-center">
                        <Image className="rounded-full" src="/img/me1.jpeg" alt="" width={300} height={300} />
                    </div>
                </div>
            </section>
        </>
    );
};
