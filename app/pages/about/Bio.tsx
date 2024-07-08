import React from "react";
import Image from "next/image";

/**
 * Renders a bio component. Includes heading, background, and image.
 * @returns Biography Component.
 */
export default function Bio() {
	return (
    	<>
      		<section className=" h-3/6">
        		<div className="container mx-auto mb-80 px-4 h-full grid grid-cols-2 grid-rows-2 flex items-center justify-center">
          			<h1 className="text-white text-4xl font-bold z-10 py-4 col-span-full mx-auto mb-5 border-b">A bit about me...</h1>
          			<p className="text-white">
					  	Since the age of three, computers have been an integral part of my
           				life (ask me about kidesk). As an aspiring software engineer, I
            			thrive on embracing new challenges&mdash;whether it&apos;s mastering unfamiliar
            			concepts or unraveling complex issues that have confounded others
            			before me. Armed with a strong technical skill set and a solid
            			academic background in programming, I am passionate about achieving
            			that &quot;aha&quot; moment when everything falls into place. <br /> <br />Throughout my
            			academic journey, I&apos;ve adeptly navigated both team collaborations
            			and independent projects, each contributing to my growth and
            			proficiency. I am set to graduate in 2025 and eagerly pursuing a
            			full-time career in development.
            			<br />
            			<br />
            			Beyond coding, I have a deep appreciation for music and photography,
            			which serve as my creative outlets and sources of inspiration.
            			Below, I&apos;ve listed some of my personal passions.
          			</p>
          			<div className="flex items-center justify-center">
            			<Image className="rounded-full" src="/img/me1.jpeg" alt="A portrait of myself, taken at Dragons Lodge on Gabriola Island, British Columbia." width={300} height={300} />	
					</div>
        		</div>
      		</section>
    	</>
  	);
};
