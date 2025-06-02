import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  isVisible: boolean;
}

const links = ["About", "Projects", "Resume", "Contact"];

const Navbar = ({ isVisible }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 lg:px-12 bg-black/30">
        <div
          className={`text-2xl font-bold transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <Link href="/">
            <span className="text-cyan-400">{"<"}</span>
            <span className="text-white">Gage</span>
            <span className="text-cyan-400">{" />"}</span>
          </Link>
        </div>

        {/* Desktop horizontal links */}
        <div
          className={`hidden md:flex space-x-8 transition-all duration-1000 delay-200 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          {links.slice(0, -1).map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/pages/${item.toLowerCase()}`}
              className="hover:text-cyan-400 text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Contact button */}
        <div className="hidden md:block">
          <Link href="/pages/contact" legacyBehavior>
            <Button
              className={`bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              CONTACT
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 right-4 left-4 bg-black/90 rounded-md p-4 flex flex-col space-y-4 z-50">
          {links.slice(0, -1).map((item) => (
            <Link
              key={item}
              href={`/pages/${item.toLowerCase()}`}
              className="text-white hover:text-cyan-400 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          {/* Contact button inside dropdown */}
          <Link href="/pages/contact" legacyBehavior>
            <Button
              onClick={() => setMenuOpen(false)}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold w-full"
              variant="contained"
            >
              CONTACT
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
