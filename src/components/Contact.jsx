import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    icon: <FaEnvelope className="text-2xl text-green-400" />,
    title: "Email",
    value: "chandrap738@gmail.com",
    link: "mailto:chandrap738@gmail.com",
  },
  {
    icon: <FaGithub className="text-2xl text-green-400" />,
    title: "GitHub",
    value: "github.com/shivamcp345",
    link: "https://github.com/shivamcp345",
  },
  {
    icon: <FaLinkedin className="text-2xl text-green-400" />,
    title: "LinkedIn",
    value: "linkedin.com/in/shivam-jeet",
    link: "https://linkedin.com/in/shivam-jeet",
  },
  {
    icon: (
      <img
        src="/leetcode.png"
        alt="LeetCode"
        className="w-7 h-7 object-contain"
      />
    ),
    icon: <SiLeetcode className="text-2xl text-yellow-500" />,
    title: "LeetCode",
    value: "leetcode.com/u/shivamcp345",
    link: "https://leetcode.com/u/shivamcp345",
  },
  {
    icon: <FaLocationDot className="text-2xl text-green-400" />,
    title: "Location",
    value: "Jodhpur, Rajasthan",
    link: "#",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#08120d] px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-green-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Let's connect and build something amazing together.
          </p>
        </div>

        {/* Contact Card */}

        <div className="mt-16 max-w-4xl mx-auto">

          <div className="bg-[#111827] rounded-3xl border border-green-500/20 p-6 sm:p-8 lg:p-10 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">

            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Get In Touch 💚
            </h3>

            <p className="text-gray-400 mt-5 leading-8 text-sm sm:text-base">
              I'm always open to discussing new opportunities,
              internships, collaborations and exciting frontend
              projects. Feel free to connect with me anytime.
            </p>

            <div className="mt-10 space-y-6">

              {contacts.map((item, index) => (

                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 rounded-xl border border-green-500/10 hover:border-green-500 hover:bg-green-500/5 transition-all duration-300"
                >

                  {item.icon}

                  <div>

                    <h4 className="text-green-400 font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-gray-300 text-sm sm:text-base break-all">
                      {item.value}
                    </p>

                  </div>

                </a>

              ))}

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="mailto:chandrap738@gmail.com"
                className="flex-1 text-center py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all duration-300"
              >
                Send Email
              </a>

              <a
                href="https://github.com/shivamcp345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                Visit GitHub
              </a>



            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;