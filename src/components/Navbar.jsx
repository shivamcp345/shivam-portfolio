import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
const navClass =
  "relative text-gray-300 hover:text-green-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full active:text-green-400";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 relative backdrop-blur-md w-full flex items-center justify-between px-5 sm:px-8 md:px-10 lg:px-16 py-5 bg-[#0f172a] border-b border-green-500 shadow-lg shadow-green-500/10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 cursor-pointer transition duration-300 hover:scale-105">
        Shivam.
      </h1>

    <div className="hidden lg:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium">
        <a
          href="#home"
          className={navClass}>
          Home
        </a>

        <a
          href="#about"
          className={navClass}
        >
          About
        </a>

        <a
          href="#skills"
          className={navClass}
        >
          Skills
        </a>

        <a
          href="#experience"
          className={navClass}
        >
          Experience
        </a>

        <a
          href="#projects"
          className={navClass}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={navClass}
        >
          Contact
        </a>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl text-green-400"
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>
      {
        open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl border-b border-green-500 flex flex-col items-center gap-6 py-6 shadow-xl shadow-green-500/10">

            <a href="#home" onClick={() => setOpen(false)} className={navClass}>
              Home
            </a>

            <a href="#about" onClick={() => setOpen(false)} className={navClass}>
              About
            </a>

            <a href="#skills" onClick={() => setOpen(false)} className={navClass}>
              Skills
            </a>

            <a href="#experience" onClick={() => setOpen(false)} className={navClass}>
              Experience
            </a>

            <a href="#projects" onClick={() => setOpen(false)} className={navClass}>
              Projects
            </a>

            <a href="#contact" onClick={() => setOpen(false)} className={navClass}>
              Contact
            </a>

          </div>
        )
      }
    </nav>
  );
};

export default Navbar;