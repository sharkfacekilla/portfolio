import React from "react";

const AboutMe = () => {
    return (
        <>
            <section className=" h-screen/2 bg-gradient-to-r from-black to-transparent">
                <div className=" inset-0 h-screen/2 bg-aboutMe h-svh">
                    <div className="container grid grid-cols-2 content-center grid-rows-2 mx-auto px-4 h-full flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold z-10 mt-auto py-4 col-span-full">About Me</h1>
                        <p className="mb-auto">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;