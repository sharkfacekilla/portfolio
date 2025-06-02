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

export type Resume = {
   resume: {
    highlights: string[];
    technical_skills: string[];
    education: {
      title: string;
      school: string;
      start_date: string;
      end_date: string;
      skills: string[];
    };
    work: {
      company: string;
      job_title: string;
      start_date: string;
      end_date: string;
      responsibilities: string[];
    }[];
    future_projects: string[];
    extracurricular: string[];
  };
}

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
