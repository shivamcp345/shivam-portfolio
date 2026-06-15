import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#08120d] px-24 py-20" id="contact">

      {/* Heading */}

      <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
          Contact <span className="text-green-400">Me</span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Let's connect and build something amazing together.
        </p>

      </div>


      <div className="grid md:grid-cols-2 gap-16 mt-20">


        <div>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-6 rounded-xl bg-[#111827] border border-green-500/20 text-white outline-none focus:border-green-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-6 rounded-xl bg-[#111827] border border-green-500/20 text-white outline-none focus:border-green-500"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-[#111827] border border-green-500/20 text-white outline-none focus:border-green-500 resize-none"
          ></textarea>

          <button className="mt-6 px-8 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 hover:scale-105 transition-all duration-300">
            Send Message
          </button>

        </div>


        <div className="bg-[#111827] rounded-2xl border border-green-500/20 p-10 flex flex-col justify-center">

          <h3 className="text-3xl font-bold text-white">
            Get In Touch 💚
          </h3>

          <p className="text-gray-400 mt-6 leading-8">
            I'm always open to discussing new opportunities,
            collaborations and exciting frontend projects.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4 text-green-400 text-xl">
              <FaEnvelope />
              <span className="text-white">
                chandrap738@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4 text-green-400 text-xl">
              <FaGithub />
              <a className="text-white">
                github.com/shivamcp345
              </a>
            </div>

            <div className="flex items-center gap-4 text-green-400 text-xl">
              <FaLinkedin />
              <span className="text-white">
                linkedin.com/in/shivam-jeet
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;