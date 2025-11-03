import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const About = () => {
  const skills = [
    {
      title: "MERN Stack",
      icons: [
        <SiJavascript key="js" />,
        <SiTypescript key="ts" />,
        <SiReact key="react" />,
        <SiNodedotjs key="node" />,
        <SiMongodb key="mongo" />,
      ],
    },
    {
      title: "Styling & UI",
      icons: [<SiTailwindcss key="tw" />],
    },
    {
      title: "Version Control",
      icons: [<SiGit key="git" />, <SiGithub key="gh" />],
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-16 mt-[5%] text-[#8B99AE]">
      
      {/* About Section (text + medium image on right) */}
      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <motion.div
          className="lg:w-[60%] text-justify"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Hello! I’m <span className="font-bold text-white">Amarnath Vijayakumar</span>, 
            a recent graduate and aspiring full-stack developer passionate about
            building dynamic web applications using modern technologies like the
            MERN stack (MongoDB, Express.js, React, Node.js).
          </p>
          <br />
          <p>
            I enjoy learning new frameworks, writing clean code, and
            collaborating with teams. Currently, I’m exploring cloud hosting,
            version control workflows, and UI frameworks to strengthen my
            development skills.
          </p>
        </motion.div>

        {/* Medium-sized Image on Right */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="lg:w-[30%] md:w-[40%] w-[70%] rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            className="w-full h-auto object-cover"
            src="/pics/me.jpg"
            alt="Amarnath Vijayakumar"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#212738] w-[90%] md:w-[80%] p-[5%] rounded-xl flex flex-col justify-center items-center text-center gap-6"
      >
        <h1 className="text-2xl font-semibold text-white">Skills & Technologies</h1>
        <p className="text-white">
          Technologies I’m comfortable with and actively learning:
        </p>
        <ul className="w-full text-white text-5xl flex flex-col gap-10">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex flex-col justify-center items-start gap-5">
              <span className="text-xl font-medium">{skill.title}</span>
              <div className="flex flex-row flex-wrap gap-8 text-4xl">
                {skill.icons.map((icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3, color: "#60A5FA" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="cursor-pointer"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-[90%] md:w-[80%] p-[3%] flex flex-col justify-center items-center gap-5"
      >
        <h1 className="text-2xl font-semibold text-white">Projects</h1>
        <p className="text-white text-center leading-relaxed">
          Developed multiple web applications including CRUD operations,
          Node.js basics, and a full-featured e-commerce website. Built using
          Node.js, Express.js, MongoDB, and React.js with a focus on backend
          logic, RESTful APIs, and dynamic UI design. Implemented user
          authentication, product management, and database integration to
          enhance functionality and scalability. I’m eager to apply my
          knowledge to real-world problems and contribute to impactful teams.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
