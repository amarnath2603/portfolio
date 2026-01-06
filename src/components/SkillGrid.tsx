import SkillCard from "./SkillCard";
const skills = [
  { 
    title: "MERN Stack", 
    description: "Hands-on experience building web applications using MongoDB, Express.js, React, and Node.js; also guide students on practical projects." 
  },
  { 
    title: "JavaScript & TypeScript", 
    description: "Write clean, modular code for front-end and back-end; mentor students on best coding practices." 
  },
  { 
    title: "React", 
    description: "Create responsive and dynamic user interfaces; teach modern front-end development techniques." 
  },
  { 
    title: "MongoDB", 
    description: "Design and work with NoSQL databases; help students understand database principles and implementation." 
  },
  { 
    title: "Git & GitHub", 
    description: "Version control and collaborative development; guide students in team projects and Git workflows." 
  },
  { 
    title: "Deployment & Cloud Basics", 
    description: "Host applications on cloud platforms; teach students deployment workflows and best practices." 
  },
  { 
    title: "Teamwork & Mentorship", 
    description: "Quick learner, collaborative, and experienced in mentoring students to foster learning and growth." 
  },
];






const SkillGrid = () => {
    return (
        <div className="w-[90%] lg:w-[50%] p-6 bg-[#0f172a] rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} title={skill.title} description={skill.description} />
                ))}
            </div>
        </div>
    );
};

export default SkillGrid;
