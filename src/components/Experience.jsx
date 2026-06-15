import React from "react";

const Experience = () => {
  return (
    <section className="min-h-screen bg-[#08120d] px-24 py-20" id="experience">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
          My <span className="text-green-400">Journey</span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          My learning path and development experience.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative max-w-4xl mx-auto mt-20">

        {/* Vertical Line */}

        <div className="absolute left-4 top-0 w-1 h-full bg-green-500 rounded-full"></div>

        {/* Item 1 */}

        <div className="relative pl-16 mb-12">

          <div className="absolute left-0 w-8 h-8 rounded-full bg-green-500 border-4 border-[#08120d]"></div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">

            <span className="text-green-400 font-semibold">
              2024
            </span>

            <h3 className="text-2xl text-white mt-2 font-bold">
              Started Web Development
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Started learning HTML, CSS and JavaScript fundamentals
              while building responsive web pages.
            </p>

          </div>

        </div>

        {/* Item 2 */}

        <div className="relative pl-16 mb-12">

          <div className="absolute left-0 w-8 h-8 rounded-full bg-green-500 border-4 border-[#08120d]"></div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">

            <span className="text-green-400 font-semibold">
              2025
            </span>

            <h3 className="text-2xl text-white mt-2 font-bold">
              React & Tailwind CSS
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Learned React.js, React Router, Hooks and Tailwind CSS
              by building real-world frontend projects.
            </p>

          </div>

        </div>

        {/* Item 3 */}

        <div className="relative pl-16">

          <div className="absolute left-0 w-8 h-8 rounded-full bg-green-500 border-4 border-[#08120d]"></div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">

            <span className="text-green-400 font-semibold">
              2026
            </span>

            <h3 className="text-2xl text-white mt-2 font-bold">
              Building Real World Projects
            </h3>

            <p className="text-gray-400 mt-3 leading-7">
              Creating modern React applications, portfolio websites,
              API based projects and continuously improving frontend
              development skills.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;