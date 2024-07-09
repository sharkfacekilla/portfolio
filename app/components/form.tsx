'use client'

import { useState, ChangeEvent, FormEvent } from "react"
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';


/**
 * Contact form that will send an email to my inbox. uses state to keep track of the forum, if its submitting (not implemented a status yet), and async/await for fetching/sending of the data.
 * Adapted for TypeScript from https://www.youtube.com/watch?v=BSpvNl4sokE
 * @returns A Contact Form.
 * TODO: Finish submitting
 */
export const ContactForm = () => {
    //state for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    //for submitting data (implement later)
    const [submitting, setSubmitting] = useState(false);

    //handler for input changes.
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, 
            [name]: value,
        });

    }

    //submit to send email
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        //async post to send the email.
        const response = await fetch('/api/contact-us', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });


        const {success, error} = await response.json();
        //maybe change this later? it works for now...
        if (success) {
            alert('Your inquiry has been submitted');
        }
        else if (error) {
            console.error(error);
            alert('An error occured while submitting your request.');
        }
        setSubmitting(false);
    }

    return (
        <>
            <section className="h-full flex flex-col items-center justify-cente">
                <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl text-light-blue mb-32 mt-28">Contact Me.</h1>
                <p>Send me an email, and lets chat!</p>
                    <form onSubmit={onSubmit} className="w-full max-w-2xl px-4">
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray dark:text-white">Name</label>
                            <input onChange={handleInputChange} type="text" id="name" name="name" className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white" placeholder="Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray dark:text-white">Email</label>
                            <input onChange={handleInputChange} type="text" id="email" placeholder="Email" name="email" className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white" required/>
                        </div>
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input id="subject" type="text"  placeholder="Subject" name="subject" onChange={handleInputChange} className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white" required/>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" cols={10} rows={10} placeholder="Enter Message..." onChange={handleInputChange} className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white" required></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue hover:bg-light-blue focus:ring-4 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue dark:hover:bg-light-blue dark:focus:ring-blue" >Submit</button>
                </form>
            </section>
        </>
    );
};
