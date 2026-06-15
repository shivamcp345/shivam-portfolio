import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-green-500/20 px-24 py-10">

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left */}

        <div>

          <h2 className="text-3xl font-bold text-green-400">
            Shivam.
          </h2>

          <p className="text-gray-400 mt-3 max-w-sm">
            Frontend Developer passionate about building
            modern, responsive and user-friendly web applications.
          </p>

        </div>

        {/* Center */}

        <div className="flex gap-8 text-gray-300">

          <a href="#home" className="hover:text-green-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-green-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-green-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>

        </div>

        {/* Right */}

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-green-400 hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-green-400 hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="text-gray-300 hover:text-green-400 hover:scale-110 transition-all"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-green-500/20 mt-10 pt-6 text-center text-gray-500">

        © 2026 Shivam. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;