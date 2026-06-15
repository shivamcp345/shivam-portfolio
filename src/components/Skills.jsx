import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { TbBinaryTree2 } from "react-icons/tb";

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#08120d] px-24 py-20" id="skills">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
          My <span className="text-green-400">Skills</span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Technologies I use to build modern web applications.
        </p>

      </div>

      {/* Skills Grid */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 ">
          <FaReact className="text-6xl text-green-400" />
          <h3 className="text-white text-xl mt-5 font-semibold">React</h3>
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
          <IoLogoJavascript className="text-6xl text-yellow-400" />
          <h3 className="text-white text-xl mt-5 font-semibold">
            JavaScript
          </h3>
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
          <RiTailwindCssFill className="text-6xl text-cyan-400" />
          <h3 className="text-white text-xl mt-5 font-semibold">
            Tailwind CSS
          </h3>
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
          <FaHtml5 className="text-6xl text-orange-500" />
          <h3 className="text-white text-xl mt-5 font-semibold">HTML</h3>
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
          <FaCss3Alt className="text-6xl text-blue-500" />
          <h3 className="text-white text-xl mt-5 font-semibold">CSS</h3>
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 ">
          <FaGitAlt className="text-6xl text-orange-600" />
          <h3 className="text-white text-xl mt-5 font-semibold">Git</h3>
        </div>

        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 ">
          <FaGithub className="text-6xl text-white" />
          <h3 className="text-white text-xl mt-5 font-semibold">GitHub</h3>
        </div>
        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
          <SiCplusplus className="text-6xl text-blue-500" />
          <h3 className="text-white text-xl mt-5 font-semibold">C++</h3>
        </div>
        <div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
  <SiC className="text-6xl text-blue-400" />
  <h3 className="text-white text-xl mt-5 font-semibold">C</h3>
</div>
<div className="bg-[#111827] rounded-2xl p-8 border border-green-500/20 flex flex-col items-center hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
  <TbBinaryTree2 className="text-6xl text-green-400" />
  <h3 className="text-white text-xl mt-5 font-semibold">DSA</h3>
</div>

      </div>

    </section>
  );
};

export default Skills;