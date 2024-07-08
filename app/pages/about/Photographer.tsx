import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

/**
 * Displays a heading, some background, a link to flickr, and an image I took myself.
 * @returns Photography component.
 */
export default function Photography() {
  return (
    <>
        <section className=" h-3/6">
            <div className="container mx-auto mb-80 px-4 h-full grid grid-cols-2 grid-rows-2 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold z-10 py-4 col-span-full mx-auto mb-5 border-b">Photography</h1>
                <div>
                    <p className="text-white">A newer passion of mine is exploring the world of photography. After seeing how good my sister was at it, it inspired me to get a camera of my own and try it out. I mostly enjoy shooting nature and street styles, but have tried my hand at long exposure, and headshot type photos as well.<br /> <br />Currently, I have a few photos on my Flickr account, but one of my future projects is to build a webspace to display all the shots I have taken and edited.</p>
                    <Button variant="contained" className="mt-4 bg-blue text-white hover:bg-light-blue border" href={"https://www.flickr.com/photos/152106905@N06"} target={"_blank"}>Visit Flickr</Button>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <Image src="/img/japan1.jpg" alt="Image I took in Japan of a Pagoda." width={500} height={500} />
                        <p className="text-center text-sm">Pagoda in Japan</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
