import React from "react";
import Image from "next/image";
import { Spotify } from "react-spotify-embed";

/**
 * Musician Component which includes a heading, a spotify embedded player, and some background information.
 * @returns Musiciaon Component.
 */
const Musician = () => {
  return (
    <>
      <section className=" h-3/6 -mt-24">
        <div className="container mx-auto mb-12 px-4 h-full grid grid-cols-2 grid-rows-1 items-center justify-center">
          <h1 className="text-white text-4xl font-bold z-10 py-4 col-span-full mx-auto mb-5 border-b">
            Musician
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2 grid grid-rows-1">
              <Spotify link="https://open.spotify.com/album/63EBH2gtv9hVK0iu5t6snZ?si=dCetXGmjTfeFCYNxYoth8Q" className="mt-24"/>
              <div>
                <p className="text-sm text-white ml-2 mt-4 text-center">
                My band on Spotify
                </p>
              </div>
            </div>
          </div>
          <p className="text-white mt-24">
            My journey into music began at the age of seven, when I first picked
            up an electric guitar, and discovered my passion for creating
            melodies and rhythms. Initially drawn to the guitar, I quickly
            immersed myself in learning chords and strumming patterns, laying
            the foundation for what would become a lifelong devotion to music.{" "}
            <br /> <br />
            During high school, I expanded my musical repertoire by learning
            drums, a decision that would later prove pivotal in my musical
            career. Inspired by a diverse range of genres and artists, I began
            to experiment with composing and arranging music, exploring
            different sounds and styles.
            <br /> <br />
            This journey culminated in the formation of Supreme Remedy, a band
            of high school friends where I contributed as a drummer and acting
            bassist, until finding our pemanent member. Together, we crafted
            various original compositions and performed at local venues, sharing
            our music with audiences and refining our craft with each show.{" "}
            <br /> <br />
            As my passion for music grew, so did my skills in production. I
            ventured into music production, releasing records on platforms like
            Spotify as well as physical media (CD's anyone?! I have some). This
            experience not only enhanced my technical abilities, but also
            deepened my appreciation for the art of music, along with sound
            engineering and production.
            <br /> <br />
            Music continues to be the driving force in my life, fueling my
            creativity and serving as a constant source of inspiration. Whether
            I'm writing songs, refining melodies, or performing live on stage, I
            am dedicated to pushing the boundaries of my musical journey and
            exploring new avenues of expression. <br /> <br />
          </p>
        </div>
      </section>
    </>
  );
};

export default Musician;
