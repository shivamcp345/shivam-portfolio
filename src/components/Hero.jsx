import React from "react";
import { FaReact, FaHtml5, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
const Hero = () => {

  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-5 sm:px-8 md:px-12 lg:px-24 py-20 bg-[#08120d] overflow-hidden relative gap-14" id="home">
      <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-xl w-full text-center lg:text-left z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
          Hi, I'm
          <span className="bg-linear-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent"> Shivam</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-green-400 font-semibold mt-4">
          Frontend Web Developer
        </h2>

        <p className="text-gray-400 mt-6 leading-8 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
          I build fast, responsive and modern web applications using React.js,
          JavaScript and Tailwind CSS with a strong focus on performance and
          user experience.
        </p>


      <div className="flex flex-wrap gap-5 mt-8 justify-center lg:justify-start">

  <a
    href="/Shivam_Resume.pdf"
    download
    className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
  >
    Download CV
  </a>

  <a
    href="#contact"
    className="inline-flex items-center justify-center px-8 py-3 border border-green-500 text-green-400 rounded-xl font-semibold hover:bg-green-500 hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
  >
    Contact Me
  </a>

</div>

        <div className="flex flex-wrap gap-4 mt-8">

          <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            HTML
          </span>

          <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            CSS
          </span>

          <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            JavaScript
          </span>

          <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            React
          </span>

          <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            Tailwind
          </span>
          <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            Git
          </span> <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            GitHub
          </span> <span className="px-4 py-2 bg-green-500/10 border border-green-500 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition duration-300 cursor-pointer hover:translate-y-2 hover:shadow-lg hover:shadow-green-500/30">
            Redux
          </span>

        </div>

      </div>

      <div className="relative flex justify-center items-center">

        <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

        <div className="absolute -top-4 left-12 bg-[#101010] p-3 rounded-full border border-green-500 shadow-lg shadow-green-500/20 animate-bounce">
          <FaReact className="text-3xl text-green-400" />
        </div>

        <div className="absolute top-20 -left-10 bg-[#101010] p-3 rounded-full border border-green-500 shadow-lg shadow-green-500/20 animate-bounce">
          <IoLogoJavascript className="text-3xl text-yellow-400" />
        </div>

        <div className="absolute bottom-16 -right-8 bg-[#101010] p-3 rounded-full border border-green-500 shadow-lg shadow-green-500/20 animate-bounce">
          <RiTailwindCssFill className="text-3xl text-cyan-400" />
        </div>

        <div className="absolute -bottom-4 left-16 bg-[#101010] p-3 rounded-full border border-green-500 shadow-lg shadow-green-500/20 animate-bounce">
          <FaGithub className="text-3xl text-white" />
        </div>
        <div className="absolute w-[420px] h-[420px] bg-green-500/20 rounded-full blur-3xl"></div>
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="relative w-80 h-80 object-cover rounded-full border-4 border-green-500 shadow-2xl shadow-green-500/20 hover:scale-105 transition-all duration-500"
        />

      </div>

    </section>
  );
};

export default Hero;