"use client";

import React from "react";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFlask,
  SiSqlite,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  { name: "React & Next.js", icon: <FaReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "Flask", icon: <SiFlask size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "SQL", icon: <FaDatabase size={40} /> },
  { name: "SQLite", icon: <SiSqlite size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
];

const TechStack = () => {
  return (
    <section
      id="skills"
      className="flex justify-center items-center py-20 w-full bg-[var(--color-navy)] text-[var(--color-bone)]"
    >
      <div className="w-full max-w-6xl px-4 md:px-10">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 place-items-center">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center w-28 h-28 rounded-full bg-[var(--color-navy-soft)] text-[var(--color-bone)] hover:bg-blue-500/20 transition-all duration-300 shadow-md"
            >
              <div>{tech.icon}</div>
              <p className="mt-2 text-xs text-center font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
