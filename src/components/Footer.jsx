
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/shivamcp345",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/shivam-jeet",
  },
  {
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/shivamcp345",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:chandrap738@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#08120d] border-t border-green-500/20 px-6 sm:px-10 md:px-16 lg:px-24 py-8">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>

          <h2 className="text-2xl font-bold text-green-400">
            Shivam.
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Frontend Developer | React Developer
          </p>

        </div>

        <div className="flex gap-5 text-2xl">

          {socials.map((item, index) => (

            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-black hover:scale-110 transition-all duration-300"
            >

              {item.icon}

            </a>

          ))}

        </div>

      </div>

      <div className="border-t border-green-500/10 mt-8 pt-6 text-center">

        <p className="text-gray-500 text-sm">

          © {new Date().getFullYear()} Shivam. Built with React & Tailwind CSS 💚

        </p>

      </div>

    </footer>
  );
};

export default Footer;








