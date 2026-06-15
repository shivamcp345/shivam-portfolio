import { NavLink } from "react-router-dom";

const navClass =
  "relative text-gray-300 hover:text-green-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full";
const Navbar = () => {
    return (
        <nav className=" sticky top-0 z-50 backdrop-blur-md w-full flex items-center justify-between px-10 py-5 bg-[#0f172a] border-b border-green-500 shadow-lg shadow-green-500/10">
            <h1 className="text-3xl font-bold text-green-400 cursor-pointer mr-5">
                Shivam.
            </h1>

            <div className="flex items-center gap-8 text-lg font-medium">
                <a
                  href="#home"
                    className= {navClass}>
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
          href = "#experience"
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
         className = {navClass}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;