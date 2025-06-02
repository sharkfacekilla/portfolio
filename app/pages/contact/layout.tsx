import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gage Patenaude | Contact Me",
};

//Using Layout to be able to export MetaData here.
export default function ContactLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}