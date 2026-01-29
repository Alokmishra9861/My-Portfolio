import { motion } from "framer-motion";
// 1. Import all the new icons
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiPostman,
} from "react-icons/si";

// 2. Updated Data: Complete Skill Set
const skills = [
  // --- Core Web ---
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },

  // --- Frontend Frameworks ---
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Vite", icon: <SiVite />, color: "text-yellow-400" },

  // --- Backend & DB ---
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-black" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" }, // Generic SQL icon
  { name: "Java", icon: <FaJava />, color: "text-red-500" },

  // --- Tools ---
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "GitHub", icon: <FaGithub />, color: "text-black" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
];

const FloatingSkills = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-orange-700 mb-5">
          Tech <span className="text-emerald-500">Stack</span>
        </h2>
        <p className="text-white mb-16 max-w-xl mx-auto">
          My toolkit for building responsive, full-stack applications.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <FloatingIcon key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Icon Component
const FloatingIcon = ({ skill }) => {
  const randomDuration = Math.random() * 3 + 2; // Random speed between 2s and 5s

  return (
    <motion.div
      className="flex flex-col items-center gap-3 group cursor-pointer"
      // Floating Animation
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      // Hover Pop Effect
      whileHover={{ scale: 1.2, y: 0, transition: { duration: 0.2 } }}
    >
      <div
        className={`text-6xl md:text-7xl ${skill.color} drop-shadow-lg filter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}
      >
        {skill.icon}
      </div>
      <p className="text-slate-500 font-medium text-sm group-hover:text-white transition-colors">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default FloatingSkills;
