'use client'

import { useState, ChangeEvent, FormEvent } from "react"
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';


export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, 
            [name]: value,
        });

    }
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const response = await fetch('/api/contact-us', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const {success, error} = await response.json();
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
            <section className="h-screen flex flex-col items-center justify-cente">
                <h1 className="mx-auto mb-5 font-extrabold tracking-tight md:text-8xl sm: text-5xl dark:text-light-blue mb-32 mt-28">Contact Me.</h1>
                <p>Send me an email, and lets chat!</p>
                    <form onSubmit={onSubmit} className="w-full max-w-2xl">
                    <div className="grid gap-6 mb-6 md:grid-cols-1">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray dark:text-white">Name</label>
                            <input onChange={handleInputChange} type="text" id="name" className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white" placeholder="Name" required />
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
    )

}