"use client";
import { useEffect, useState } from "react";
import Navbar from "../navbarr";
import Sidebar from "../sidebar/sidebar";

const Navigation = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => {
//         setIsOpen(!isOpen);
//    }
       const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // trigger animation once layout is mounted
  }, []);
    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle}/>     */}
            <Navbar isVisible={isVisible} />
        </>
    )
}

export default Navigation;