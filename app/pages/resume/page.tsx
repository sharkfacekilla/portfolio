import Resume from "@/app/components/Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gage Patenaude | Resume",
};

/**
 * Resume Page. 
 */
export default function ResumePage () {
    return (
        <Resume />
    );
};
