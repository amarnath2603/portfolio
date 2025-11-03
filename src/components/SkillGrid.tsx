import SkillCard from "./SkillCard";


const skills = [
  { title: "MERN Stack", description: "I have hands-on practice building small projects using MongoDB, Express.js, React and Node.js" },
  { title: "JavaScript & TypeScript", description: "Comfortable writing clean and modular code for front-end and back-end" },
  { title: "React", description: "Able to create responsive and dynamic user interfaces" },
  { title: "MongoDB", description: "Basic knowledge of designing and working with NoSQL databases" },
  { title: "Git & GitHub", description: "Version control and collaborative development" },
  { title: "Deployment Basics", description: "Learning to host apps on cloud platforms" },
  { title: "Teamwork & Learning", description: "Quick learner, good at collaborating and open to mentorship" },
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
