import React from "react";
import Image from "next/image";

export default function Bio() {
    return (
        <>
            <section className=" h-3/6">
                <div className="container mx-auto mb-80 px-4 h-full grid grid-cols-2 grid-rows-2 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold z-10 py-4 col-span-full mx-auto mb-5 border-b">Who Am I?</h1>
                    <p className="text-white">
                        Ever since the age of three, I have been involved in computers in some capacity (ask me about kidesk). As an aspiring computer scientist that thrives on tackling new challenges, be it mastering unfamiliar concepts, or solving a complex issue that have stumped those before me. With a robust technical skill set and a solid academnic foundation in programming, I am passionate about that "cracking the code" moment. <br /> <br />In my studies, I've worked in a team environment, as well as on my own, creating different projects. I'm graduating in 2025, and interested in a full-time development career. I also have interests in music, and photography. I have listed some of my personal passions here.
                    </p>
                    <div className="flex items-center justify-center">
                        <Image className="rounded-full" src="/img/me1.jpeg" alt="" width={300} height={300} />
                    </div>
                </div>
            </section>
        </>
    );
};
