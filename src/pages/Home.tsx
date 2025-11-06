import { useEffect, useState } from "react";
import { DownloadIcon } from "lucide-react";
import SkillGrid from "../components/SkillGrid";
import Inspiration from "../components/Inspiration";
import ShiningButton from "../components/mage/ShiningButton";
import { SiFreelancer } from "react-icons/si";
import { NavLink } from "react-router-dom";

const roles = ["Full Stack Developer","MERN Stack Developer"];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = roles[currentRole];
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentRole((currentRole + 1) % roles.length);
        setDisplayText("");
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentRole]);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-[5%]">
      <div className="w-[90%] 2xl:w-[75%] flex flex-col md:flex-col lg:flex-row gap-10 justify-center items-center">
        <div className="w-[90%] lg:w-[50%] flex flex-col gap-5 mt-20">
          <span className="text-white text-4xl font-bold">
            Hello <span className="wave">👋</span>, This is
          </span>
          <span className="bg-gradient-to-r from-[#FFC220] via-[#FF4FD8] to-[#8514f5] bg-clip-text text-transparent text-4xl font-bold">
            Amarnath Vijayakumar
          </span>
          <h2 className="text-[#8B99AE] text-2xl font-semibold">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-[#8B99AE] text-justify">
            I am a MERN stack developer with experience in building scalable full-stack web applications. My expertise includes creating RESTful APIs with Node.js and Express.js, designing dynamic and interactive user interfaces with React, and managing databases with MongoDB. I focus on clean code, performance, and responsive designs for a seamless user experience.
          </p>
          <div className="flex flex-col md:flex-col lg:flex-row justify-start items-center gap-10">
            <a
              href="https://www.linkedin.com/in/amar-amarnath2603/"
              aria-label="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShiningButton
                label="Connect with me on"
                color="linkedin"
                labelcolor="white"
                icon={<i className="pi pi-linkedin transition-all group-hover:translate-x-1"></i>}
              />
            </a>

            <a
              href="/resume/amar.pdf"
              aria-label="resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShiningButton
                label="Download Resume"
                color="mart-yellow"
                labelcolor="dark-blue"
                icon={<DownloadIcon className="transition-all group-hover:translate-y-1" />}
              />
            </a>
          </div>
        </div>
        <SkillGrid />
      </div>

      <div className="w-full p-[5%] flex justify-center items-center">
        <div className="bg-[#212738] w-[90%] lg:w-[50%] p-[5%] rounded-xl flex flex-col justify-center items-center text-center gap-5">
          <SiFreelancer className="text-7xl text-white" />
          <h1 className="text-3xl font-semibold text-white">Let's Grow Together</h1>
          <p className="text-white text-justify">
            Whether you’re looking for a freelance developer, a collaborator for your next big idea, or someone to teach modern technologies — I’m open and ready. Let’s build and grow together.
          </p>
          <NavLink to="/contact">
            <ShiningButton
              label="Get in Touch"
              color="mart-yellow"
              labelcolor="dark-blue"
              icon={null}
            />
          </NavLink>
        </div>
      </div>
      <Inspiration />
    </div>
  );
};

export default Home;
