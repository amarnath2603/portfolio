import SkillCard from "./SkillCard";
const skills = [
  {
    title: "MERN Stack",
    description: "Hands-on experience building full-stack web applications using MongoDB, Express.js, React, and Node.js. Guide students in developing practical, industry-oriented projects."
  },
 
  {
    title: "Artificial Intelligence",
    description: "Knowledge of AI concepts, intelligent systems, prompt engineering, and AI-powered tools. Passionate about integrating AI into education and software development."
  },
  {
    title: "Machine Learning",
    description: "Understanding of supervised and unsupervised learning, data preprocessing, model evaluation, and Python-based machine learning fundamentals."
  },
  {
    title: "Git & GitHub",
    description: "Experienced in version control, collaborative development, and guiding students in Git workflows and team-based software projects."
  },
  {
    title: "Deployment & Cloud Basics",
    description: "Deploy web applications on cloud platforms and introduce students to modern deployment workflows and hosting practices."
  },
  {
    title: "Teaching & Mentorship",
    description: "Dedicated Assistant Professor with experience mentoring students, promoting practical learning, and bridging academic concepts with industry requirements."
  },
];





const SkillGrid = () => {
  return (
    <div className="w-full lg:w-[60%] p-6 bg-[#0f172a] rounded-3xl shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillGrid;
