import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gage Patenaude | About Me",
};

//Using Layout to be able to export MetaData here.
export default function AboutMeLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}