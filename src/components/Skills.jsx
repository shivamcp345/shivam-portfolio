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

const skills = [
  {
    icon: <FaReact className="text-4xl sm:text-5xl lg:text-6xl text-green-400" />,
    name: "React",
  },
  {
    icon: <IoLogoJavascript className="text-4xl sm:text-5xl lg:text-6xl text-yellow-400" />,
    name: "JavaScript",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl sm:text-5xl lg:text-6xl text-cyan-400" />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaHtml5 className="text-4xl sm:text-5xl lg:text-6xl text-orange-500" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt className="text-4xl sm:text-5xl lg:text-6xl text-blue-500" />,
    name: "CSS",
  },
  {
    icon: <FaGitAlt className="text-4xl sm:text-5xl lg:text-6xl text-orange-600" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="text-4xl sm:text-5xl lg:text-6xl text-white" />,
    name: "GitHub",
  },
  {
    icon: <SiCplusplus className="text-4xl sm:text-5xl lg:text-6xl text-blue-500" />,
    name: "C++",
  },
  {
    icon: <SiC className="text-4xl sm:text-5xl lg:text-6xl text-blue-400" />,
    name: "C",
  },
  {
    icon: <TbBinaryTree2 className="text-4xl sm:text-5xl lg:text-6xl text-green-400" />,
    name: "DSA",
  },
];

const Skills = () => {
  return (
    <section
      className="min-h-screen bg-[#08120d] px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="text-green-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies I use to build modern web applications.
          </p>

        </div>



        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mt-14 sm:mt-20">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-5 sm:p-6 lg:p-8 border border-green-500/20 flex flex-col items-center hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300"
            >

              {skill.icon}

              <h3 className="text-white text-base sm:text-lg lg:text-xl mt-4 font-semibold text-center">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;



