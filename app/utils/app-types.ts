export type Feature = {
  name: string;
  description: string;
};

export type User = {
  name: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  shortDesc: string;
  img: string;
  description: string;
  link: string;
  youtubeLink: string;
  githubLink: string;
  tech: TechCategory[];
  altTxt: string;
  skills: { [key: string]: string | undefined };
  status: string;
  timeline: string;
  team: string;
  features?: Feature[];
  challenges?: string[];
  learnings?: string[];
  goals?: string[];
  users?: User[];
  demoLink: string;
};

export type TechCategory = {
  name: string;
  technology: string[];
};

export type ProjectProps = {
  project: Project;
};

export type ProjectParams = {
  params: { id: string };
  isVisible: boolean;
};

export type NavbarProps = {
  isVisible: boolean;
  projects?: Project[];
};

export type Resume = {
  highlights: StringList;
  technical_skills: TechSkills;
  education: ResumeEducation[];
  work: WorkHistory;
  future_projects: StringList;
  extracurricular: StringList;
};

export type TechSkills = {
  frontend: StringList;
  backend: StringList;
  other: StringList;
};

export type ResumeEducation = {
  degree: string;
  school: string;
  period: string;
  status: string;
  skills: StringList;
};

export type ResumeWork = {
  company: string;
  job_title: string;
  start_date: string;
  end_date: string;
  responsibilites: JobResponsibilities;
};

export type StringList = string[];
export type JobResponsibilities = StringList

export type WorkHistory = {
  [key: string] : ResumeWork;
};

export type ResumeJsonData = {
  resume: Resume;
};

export type ResumeHighlightsProps= {
  isVisible: boolean;
  highlights: StringList
};

export type ResumeTechProps = {
  isVisible: boolean;
  skills: TechSkills;
};

export type ResumeEducationProps = {
  isVisible: boolean;
  education: ResumeEducation;
};
