import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-[#08120d] px-24 py-20" id="about">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
          About <span className="text-green-400">Me</span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Passionate about creating modern and user-friendly web applications.
        </p>

      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center mt-20">

        {/* Left Side */}
        <div className="bg-[#111827] border border-green-500/20 rounded-2xl p-8 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">

          <pre className="text-green-400 text-lg leading-8">
{`const developer = {

  name: "Shivam",

  role: "Frontend Developer",

  skills: [
    "React",
    "JavaScript",
    "Tailwind CSS"
  ],

  passion: "Building Modern UI"
};`}
          </pre>

        </div>

        {/* Right Side */}
        <div>

          <h3 className="text-3xl font-bold text-white">
            Frontend Developer 💚
          </h3>

          <p className="text-gray-400 mt-6 leading-8 text-lg">
            I'm a passionate Frontend Developer focused on creating
            responsive, modern and interactive web applications using
            React.js, JavaScript and Tailwind CSS.
          </p>

          <p className="text-gray-400 mt-4 leading-8 text-lg">
            I enjoy solving problems, learning new technologies and
            building projects that provide a great user experience.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="text-green-400">✓ React.js</div>
            <div className="text-green-400">✓ JavaScript</div>
            <div className="text-green-400">✓ Tailwind CSS</div>
            <div className="text-green-400">✓ Responsive Design</div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;