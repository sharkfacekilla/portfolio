import resume from "../../../public/resume.json"

const ResumePage = () => {
    let {highlights, education, work } = resume.resume;

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
                <ul className="list-disc list-inside space-y-4">
                        {Object.values(highlights).map((highlight, index) => (
                            <li key={index}>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-12 h-0.5 border-t-0 bg-black dark:bg-blue/50" />
                    <h2 className="mx-autp mb-14 font-extrabold tracking-light text-5xl mt-12 text-shadow">Education</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <span className="font-extrabold text-2xl text-shadow">{education.title} | {education.school} | {education.start_date} - {education.end_date}</span>
                        {Object.values(education.skills).map((skill, index) => (
                            <li key={index}>
                                <span>{skill}</span>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-12 h-0.5 border-t-0 bg-black dark:bg-blue/50" />
                    <h2 className="mx-autp mb-14 font-extrabold tracking-light text-5xl text-shadow">Work Experience</h2>
                    {Object.keys(work).map((key) => {
                        const job = work[key as keyof typeof work] as WorkEntry;
                        return (
                            <>
                            <ul className="list-disc list-inside space-y-2 mt-12">
                                <div className="container mb-5">
                                <span className="font-extrabold text-2xl text-shadow mt-5">{job.job_title} | {job.company} | {job.start_date} - {job.end_date}</span>
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
                    {/* <ul className="list-disc list-inside space-y-4 mb-12">
                        <span className="font-extrabold text-2xl text-shadow">{work.sbux.job_title} | {work.sbux.company} | {work.sbux.start_date} - {work.sbux.end_date}</span>
                            {Object.values(work.sbux.responsibilities).map((responsibility, index) => (
                                <li key={index}>
                                    <span>{responsibility}</span>
                                </li>
                            ))}
                    </ul>
                    <ul className="list-disc list-inside space-y-4">
                        <span className="font-extrabold text-2xl text-shadow">{work.shaw.job_title} | {work.shaw.company} | {work.shaw.start_date} - {work.shaw.end_date}</span>
                        {Object.values(work.shaw.responsibilities).map((responsibility, index) => (
                            <li key={index}>
                                    <span>{responsibility}</span>
                                </li>
                    ))}
                    </ul> */}
                </div>
            </section>
        </>
    );
}
export default ResumePage;