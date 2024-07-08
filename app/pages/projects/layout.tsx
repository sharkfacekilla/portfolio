import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gage Patenaude | Projects",
};

//Using Layout to be able to export MetaData here.
export default function ProjectsLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}