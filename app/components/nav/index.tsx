"use client";
import { useState } from "react";
import Navbar from "../navbarr";
import Sidebar from "../sidebar/sidebar";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
   }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>    
            <Navbar toggle={toggle}/>
        </>
    )
}

export default Navigation;