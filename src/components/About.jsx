import React from "react";

const About = () => {
  return (
    <section
      className="min-h-screen bg-[#08120d] px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20"
      id="about"
    >
     <div className="max-w-7xl mx-auto">
       <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          About <span className="text-green-400">Me</span>
        </h2>

        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Passionate about creating modern and user-friendly web applications.
        </p>

      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-14 sm:mt-20">
        {/* Left Side */}
        <div className="bg-[#111827] border border-green-500/20 rounded-2xl p-5 sm:p-8 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 overflow-x-auto">
          <pre className="text-green-400 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 whitespace-pre-wrap break-words">
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

<h3 className="text-2xl sm:text-3xl font-bold text-white text-center lg:text-left">
            Frontend Developer 💚
          </h3>

   <p className="text-gray-400 mt-6 leading-7 sm:leading-8 text-base sm:text-lg text-center lg:text-left">
            I'm a passionate Frontend Developer focused on creating
            responsive, modern and interactive web applications using
            React.js, JavaScript and Tailwind CSS.
          </p>

    <p className="text-gray-400 mt-4 leading-7 sm:leading-8 text-base sm:text-lg text-center lg:text-left">
            I enjoy solving problems, learning new technologies and
            building projects that provide a great user experience.
          </p>

          {/* Skills */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="text-green-400 text-center sm:text-left">✓ React.js</div>
            <div className="text-green-400 text-center sm:text-left">✓ JavaScript</div>
            <div className="text-green-400 text-center sm:text-left">✓ Tailwind CSS</div>
            <div className="text-green-400 text-center sm:text-left">✓ Responsive Design</div>

          </div>

        </div>

      </div>
     </div>

    </section>
  );
};

export default About;