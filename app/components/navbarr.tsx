    import React, {useEffect, useState} from "react";
    import Link from "next/link";
    import Logo from "./nav/logo";
    import { Button } from "@mui/material";
    import SendIcon from '@mui/icons-material/Send';
    import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon from Material-UI
    import { Project } from '../utils/project';

    // Define the props interface
    interface NavbarProps {
        toggle: () => void;
    }

    const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
        const [show, setShow] = useState(true);

        const controlBar = () => {
            if (window.scrollY > 100) {
                setShow(false);
            } else {
                setShow(true);
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', controlBar);
            return () => {
                window.removeEventListener('scroll', controlBar);
            };
        }, []);

        return (
            <>
               <div className={`nav ${show ? 'show' : 'hide'} w-full h-20 bg-black sticky top-0 opacity-90 z-50`}>
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex justify-between items-center h-full">
                            <Link href="/">
                                <Logo />
                            </Link>
                            <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                    <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                                </svg>
                            </button>
                            <ul className="hidden md:flex gap-x-6 text-white">
                                <li>
                                    <Link href="/pages/about">
                                        <p className="mt-1">About</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pages/projects">
                                        <p className="mt-1">Projects</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pages/resume">
                                        <p className="mt-1">Resume</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/components/contact">
                                        <Button className="bg-light-blue text-black hover:bg-green border-transparent" variant="contained" endIcon={<SendIcon />} disableElevation>Contact</Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    export default Navbar;
