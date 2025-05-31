export type Feature = {
  name: string;
  description: string;
};

export type User = {
  name: string;
  description: string;
};

export type Project = {
  id: number;
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
};

export type TechCategory = {
  name: string;
  technology: string[];
};

export type ProjectProps = {
  project: Project;
};

export type ProjectParams = {
  params: { id: number };
  isVisible: boolean;
};

export type NavbarProps = {
  isVisible: boolean;
  projects?: Project[];
};
