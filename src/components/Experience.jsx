const experiences = [
  {
    year: "2025 - Present",
    title: "Web Development Trainee",
    company: "Regex Software Services",
    description:
      "Learning React.js, JavaScript, Tailwind CSS, API Integration and building real-world frontend projects while improving problem-solving skills.",
  },
  {
    year: "2024 - Present",
    title: "Bachelor of Computer Applications",
    company: "Amity University Online",
    description:
      "Pursuing BCA while strengthening Data Structures & Algorithms, Web Development and modern frontend technologies.",
  },
  {
    year: "165+ Problems",
    title: "LeetCode Journey",
    company: "Problem Solving",
    description:
      "Solved 165+ DSA problems covering Arrays, Strings, Hashing, Recursion and continuously improving logical thinking.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#08120d] px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My <span className="text-green-400">Journey</span>
          </h2>

          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            My learning path and frontend development experience.
          </p>

        </div>

        <div className="relative max-w-4xl mx-auto mt-16">

          <div className="absolute left-3 sm:left-5 top-0 w-1 h-full bg-green-500 rounded-full"></div>

          {experiences.map((item, index) => (

            <div
              key={index}
              className="relative pl-12 sm:pl-20 mb-12"
            >

              <div className="absolute left-0 sm:left-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-green-500 border-4 border-[#08120d]"></div>

              <div className="bg-[#111827] border border-green-500/20 rounded-2xl p-5 sm:p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">

                <span className="text-green-400 text-sm sm:text-base font-semibold">
                  {item.year}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {item.title}
                </h3>

                <h4 className="text-green-300 mt-2 text-sm sm:text-base">
                  {item.company}
                </h4>

                <p className="text-gray-400 mt-4 leading-7 text-sm sm:text-base">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;