import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { ArrowRight } from "lucide-react";
import { NavbarProps } from "../utils/app-types";

/**
 * Contact form that will send an email to my inbox. uses state to keep track of the forum, if its submitting (not implemented a status yet), and async/await for fetching/sending of the data.
 * Adapted for TypeScript from https://www.youtube.com/watch?v=BSpvNl4sokE
 * @returns A Contact Form.
 */
export const ContactForm = ({ isVisible }: NavbarProps) => {
  //state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //for submitting data (implement later)
  const [submitting, setSubmitting] = useState(false);

  //handler for input changes.
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //submit to send email
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    //async post to send the email.
    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { success, error } = await response.json();
    //maybe change this later? it works for now...
    if (success) {
      alert("Your inquiry has been submitted");
    } else if (error) {
      console.error(error);
      alert("An error occured while submitting your request.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 translate-y-10 opacity-0"
        }`}
      >
        <section className="h-full flex flex-col items-center mb-64">
          <form onSubmit={onSubmit} className="w-full max-w-2xl px-4">
            <div className="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray dark:text-white"
                >
                  Name
                </label>
                <input
                  onChange={handleInputChange}
                  value={formData.name}
                  type="text"
                  id="name"
                  name="name"
                  className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray dark:text-white"
                >
                  Email
                </label>
                <input
                  onChange={handleInputChange}
                  value={formData.email}
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  onChange={handleInputChange}
                  value={formData.subject}
                  className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  cols={10}
                  rows={10}
                  placeholder="Enter Message..."
                  onChange={handleInputChange}
                  value={formData.message}
                  className="bg-black border border-white text-white text-sm rounded-lg block w-full p-2.5 dark:bg-black dark:border-white dark:placeholder-gray dark:text-white"
                  required
                ></textarea>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 mt-auto bg-black/20"
            >
              Submit
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </form>
        </section>
      </div>
    </>
  );
};
