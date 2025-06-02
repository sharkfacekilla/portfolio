// import React from "react";
// import ResumeCard from "../components/ResumeCard";
// import resume from "../../public/resume.json";

// // Destructuring the JSON object for ease of use.
// const {
//   highlights,
//   education,
//   work,
//   future_projects,
//   extracurricular,
//   technical_skills,
// } = resume.resume;

// // Defines what a work entry in the object looks like.
// interface WorkEntry {
//   company: string;
//   job_title: string;
//   start_date: string;
//   end_date: string;
//   responsibilities: { [key: string]: string };
// }

// /**
//  * Resume Page Component. Displays the contents of resume.json.
//  */
// const ResumePage: React.FC = () => {
//   return (
//     // Resume Section
//     <section className="relative py-12 pb-64">
//       <div className="container mx-auto text-center">
//         <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl text-light-blue mb-32 mt-28">
//           Resume.
//         </h1>
//       </div>
//       <div className="container mx-auto flex flex-wrap">
//         {/* Highlights */}
//         <div className="w-full lg:w-3/4 px-4">
//           <h2 className="mx-auto mb-14 font-extrabold tracking-light text-4xl text-shadow lg:text-left text-center px-4">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside space-y-4 px-4">
//             {/* Since I did not use an array within the object, need to use Object.values */}
//             {Object.values(highlights).map((highlight, index) => (
//               <li key={index}>
//                 <span className="mx-auto text-white">{highlight}</span>
//               </li>
//             ))}
//           </ul>
//           <hr className="my-12 h-0.5 border-t-0 bg-blue/50" />
//           {/* Technical Skills */}
//           <h2 className="mx-auto mb-14 font-extrabold tracking-light text-4xl text-shadow lg:text-left text-center px-4 mt-12">
//             Technical Skills
//           </h2>
//           <ul className="flex flex-wrap gap-4 justify-center lg:justify-start list-none p-0">
//             {Object.values(technical_skills).map((tech_skill, index) => (
//               <li key={index}>
//                 <span
//                   style={{ backgroundColor: "var(--light-blue)" }}
//                   className="text-black rounded-full px-4 py-2"
//                 >
//                   {tech_skill}
//                 </span>{" "}
//               </li>
//             ))}
//           </ul>
//           <hr className="my-12 h-0.5 border-t-0 bg-blue/50" />
//           {/* Education */}
//           <h2 className="mx-auto mb-14 font-extrabold tracking-light text-4xl mt-12 text-shadow text-center lg:text-left px-4">
//             Education
//           </h2>
//           <ul className="list-disc list-inside space-y-4 px-4">
//             <span className="font-extrabold text-2xl text-shadow" style={{ color: "var(--light-blue)" }}>
//               {education.degree} | {education.school} | {education.period} -{" "}
//             </span>
//             {Object.values(education.skills).map((skill, index) => (
//               <li key={index}>
//                 <span className="text-white">{skill}</span>
//               </li>
//             ))}
//           </ul>
//           <hr className="my-12 h-0.5 border-t-0 bg-blue/50" />
//           {/* Work Experience  */}
//           <h2 className="mx-auto mb-14 font-extrabold tracking-light text-4xl text-shadow text-center lg:text-left px-4">
//             Work Experience
//           </h2>
//           {Object.keys(work).map((key) => {
//             const job = work[key as keyof typeof work] as WorkEntry;
//             return (
//               <ul
//                 className="list-disc list-inside space-y-2 mt-12 px-4"
//                 key={key}
//               >
//                 <div className="container mb-5">
//                   <span className="font-extrabold text-2xl text-shadow mt-5" style={{ color: "var(--light-blue)" }}>
//                     {job.job_title} | {job.company} | {job.start_date} -{" "}
//                     {job.end_date}
//                   </span>
//                 </div>
//                 {Object.values(job.responsibilities).map(
//                   (responsibility, index) => (
//                     <li key={index}>
//                       <span className="text-white">{responsibility}</span>
//                     </li>
//                   )
//                 )}
//               </ul>
//             );
//           })}
//           <hr className="my-12 h-0.5 border-t-0 bg-blue/50" />
//           {/* Future Projects */}
//           <h2 className="mx-auto mb-14 font-extrabold tracking-light text-4xl text-shadow mt-12 text-center lg:text-left px-4">
//             Future Projects
//           </h2>
//           <ul className="list-disc list-inside space-y-4 px-4">
//             {Object.values(future_projects).map((project, index) => (
//               <li key={index}>
//                 <span className="text-white">{project}</span>
//               </li>
//             ))}
//           </ul>
//           <hr className="my-12 h-0.5 border-t-0 bg-blue/50" />
//           {/* Extracurricular Activities */}
//           <h2 className="mx-auto mb-14 font-extrabold tracking-light text-4xl text-shadow mt-12 text-center lg:text-left px-4">
//             Extracurricular Activities
//           </h2>
//           <ul className="list-disc list-inside space-y-4 px-4">
//             {Object.values(extracurricular).map((activity, index) => (
//               <li key={index}>
//                 <span className="text-white">{activity}</span>
//               </li>
//             ))}
//           </ul>
//           <hr className="my-12 h-0.5 border-t-0 bg-blue/50" />
//         </div>
//         {/* Sticky Download Card Component  */}
//         <div className="hidden lg:block lg:w-1/4 px-4">
//           <div className="sticky top-24">
//             <ResumeCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResumePage;
