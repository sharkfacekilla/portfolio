import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gage Patenaude | Resume",
};

//Using Layout to be able to export MetaData here.
export default function ResumeLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>
}