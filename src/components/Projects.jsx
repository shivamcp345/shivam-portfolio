import React from "react";

const projects = [
  {
    title: "Food Ordering App",
    image: "/image.png",
    description:
      "A modern and responsive food ordering application built with React.js and Tailwind CSS. Users can browse categories, search dishes and enjoy a smooth ordering experience.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Category-wise Food Menu",
      "Interactive UI",
      "Responsive Design",
      "Fast Navigation",
    ],
    live: "https://food-ordering-app-lsf0.onrender.com",
    github: "https://github.com/shivamcp345",
  },
  {
    title: "Personal Portfolio",
    image: "/portfolioimage.png",
    description:
      "Modern portfolio built with React and Tailwind CSS to showcase skills, projects and experience with smooth responsive design.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Modern Hero Section",
      "Responsive Layout",
      "Skills Showcase",
      "Interactive Contact",
    ],
    live: "#",
    github: "https://github.com/shivamcp345/portfolio",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#08120d] px-6 sm:px-10 md:px-16 lg:px-24 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="text-green-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Some of the projects I've built using modern frontend
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl overflow-hidden border border-green-500/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500 text-green-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-2 text-gray-400 text-sm">
                  {project.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center px-5 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center px-5 py-3 rounded-lg border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;