import { ContactForm } from "../../components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gage Patenaude | Contact Me",
};

/**
 * Renders the form to send an email.
 * @returns Contact Form component.
 */
export default function ContactPage() {
    return (
        <>
            <ContactForm />
        </>
    )
};

