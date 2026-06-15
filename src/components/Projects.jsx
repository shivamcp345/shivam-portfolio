import React from "react";

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#08120d] px-24 py-20" id="projects">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
          My <span className="text-green-400">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Some of the projects I've built using modern web technologies.
        </p>

      </div>

      {/* Project Card */}

      <div className="grid md:grid-cols-2  gap-10 mt-14 mx-w-5xl mx-auto">

        <div className="bg-[#111827] rounded-2xl overflow-hidden border border-green-500/20 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 flex flex-col h-full">

          {/* Project Image */}

          <img
            src="/image.png"
            alt="Food Ordering App"
className="w-full h-44 object-cover transition-all duration-500 hover:scale-105"          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              Food Ordering App
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              A modern and responsive food ordering application built
              with React.js and Tailwind CSS. Users can browse food
              categories, search dishes, add items to cart and enjoy
              a smooth, user-friendly ordering experience.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500 text-green-400 text-sm font-medium hover:bg-green-500 hover:text-black transition-all duration-300">
                React
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500 text-green-400">
                JavaScript
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500 text-green-400">
                Tailwind CSS
              </span>

               </div>
              <ul className="mt-4 text-gray-400 text-sm space-y-2">

                <li>✅ Category-wise Food Menu</li>

                <li>✅ Interactive User Interface</li>

                <li>✅ Responsive Design</li>

                <li>✅ Fast Navigation</li>

              </ul>

            

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="px-5 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="px-5 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        <div className="bg-[#111827] rounded-2xl overflow-hidden border border-green-500/20 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 flex flex-col h-full">

          {/* Project Image */}

          <img
            src="/portfolioimage.png"
            alt="portfolioimage"
className="w-full h-44 object-cover transition-all duration-500 hover:scale-105"          />

          <div className="p-6 flex flex-col flex-1">

            <h3 className="text-2xl font-bold text-white">
              Personal Portfolio
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              A modern and fully responsive developer portfolio built
              with React.js and Tailwind CSS to showcase my skills,
              projects, experience and contact information with a
              clean and interactive user interface.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500 text-green-400">
                React
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500 text-green-400">
                JavaScript
              </span>

              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500 text-green-400">
                Tailwind CSS
              </span>
              </div>
              <ul className="mt-4 text-gray-400 text-sm space-y-2">

                <li>✅ Modern Hero Section</li>

                <li>✅ Responsive Layout</li>

                <li>✅ Skills & Experience Showcase</li>

                <li>✅ Interactive Contact Section</li>
              </ul>

           

            <div className="flex gap-4 mt-auto pt-6">

              <a
              href="https://food-ordering-app-lsf0.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
                className="px-5 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/shivamcp345/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>


    </section>
  );
};

export default Projects;