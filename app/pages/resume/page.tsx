import resume from "../../../public/resume.json"

const ResumePage = () => {
    let {highlights, education, work, future_projects, extracurricular } = resume.resume;

    interface WorkEntry {
        company: string;
        job_title: string;
        start_date: string;
        end_date: string;
        responsibilities: { [key: string]: string };
    }
    
    return (
        <>
            <section className="relative py-12">
                <div className="container mx-auto text-center">
                    <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl dark:text-light-blue mb-32 mt-28">Resume.</h1>
                </div>
                <div className="container mx-auto">
                <h2 className="mx-auto mb-14 font-extrabold tracking-light text-5xl text-shadow lg:text-left text-center">Highlights</h2>
                <ul className="list-disc list-inside space-y-4 px-4">
                        {Object.values(highlights).map((highlight, index) => (
                            <li key={index} >
                                <span className="mx-auto">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-12 h-0.5 border-t-0 bg-black dark:bg-blue/50" />
                    <h2 className="mx-autp mb-14 font-extrabold tracking-light text-5xl mt-12 text-shadow text-center lg:text-left">Education</h2>
                    <ul className="list-disc list-inside space-y-4 px-4">
                        <span className="font-extrabold text-2xl text-shadow text-light-blue">{education.title} | {education.school} | {education.start_date} - {education.end_date}</span>
                        {Object.values(education.skills).map((skill, index) => (
                            <li key={index}>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-12 h-0.5 border-t-0 bg-black dark:bg-blue/50" />
                    <h2 className="mx-autp mb-14 font-extrabold tracking-light text-5xl text-shadow text-center lg:text-left px-4">Work Experience</h2>
                    {Object.keys(work).map((key) => {
                        const job = work[key as keyof typeof work] as WorkEntry;
                        return (
                            <>
                            <ul className="list-disc list-inside space-y-2 mt-12 px-4">
                                <div className="container mb-5">
                                <span className="font-extrabold text-2xl text-shadow mt-5 text-light-blue">{job.job_title} | {job.company} | {job.start_date} - {job.end_date}</span>
                                </div>
                                    {Object.values(job.responsibilities).map((responsibility, index) => (
                                        <li key={index}>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        );
                    })}
                    <hr className="my-12 h-0.5 border-t-0 bg-black dark:bg-blue/50" />
                    <h2 className="mx-autp mb-14 font-extrabold tracking-light text-5xl text-shadow mt-12 text-center lg:text-left">Future Projects</h2>
                    <ul className="list-disc list-inside space-y-4 px-4">
                    {Object.values(future_projects).map((project, index) => (
                        <li key={index}>
                            <span>{project}</span>
                        </li>
                    ))}
                    </ul>
                    <hr className="my-12 h-0.5 border-t-0 bg-black dark:bg-blue/50" />
                    <h2 className="mx-autp mb-14 font-extrabold tracking-light text-5xl text-shadow mt-12 text-center lg:text-left">Extracurricular Activities</h2>
                    <ul className="list-disc list-inside space-y-4 px-4">
                        {Object.values(extracurricular).map((activity, index) => (
                            <li key={index}>
                                <span>{activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default ResumePage;
