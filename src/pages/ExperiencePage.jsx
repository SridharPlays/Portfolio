import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Technical Team Member",
    company: "Centre for Academic and Professional Support (CAPS)",
    period: "Aug 2025 - Present",
    description:
      "Spearheaded the development of the official CAPS website and internal tools. Automated attendance tracking for student workshops using Google Apps Script and React Native, improving operational efficiency by 40%.",
    skills: ["React", "Google Apps Script", "Automation", "UI/UX"],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Student Alumni Wing (SAW)",
    period: "Jan 2026 - Present",
    description:
      "Leading the redesign of the SAW microsite to enhance alumni engagement. prototyping new layouts and implementing a responsive, modern interface consistent with institutional branding.",
    skills: ["Web Design", "Frontend Dev", "Prototyping"],
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    period: "2024 - Present",
    description:
      "Developed diverse solutions including 'Bengaluru Cares' (volunteer platform), 'Connectify' (real-time chat), and 'CineFlix'. consistently delivering robust applications using MERN stack and Python.",
    skills: ["MERN Stack", "Python", "System Design"],
  },
  {
    id: 4,
    role: "Game Developer (Team Lead)",
    company: "College GameCraft Event",
    period: "Sep 2025",
    description:
      "Led a team of 4 to create 'Dear Stranger', a React Native-based narrative mystery game. Managed project timeline, narrative structure, and core game mechanics implementation.",
    skills: ["React Native", "Team Leadership", "Game Logic"],
  },
];

const ExperiencePage = () => {
  return (
    <section className="min-h-screen w-full py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold font-[Meow_Script] mb-4">My Journey</h1>
        <p className="text-slate-500 font-[Lexend]">
          A timeline of my professional roles and key milestones.
        </p>
      </div>

      <div className="relative flex flex-col gap-12">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 md:block hidden" />
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2 md:hidden block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow-sm -translate-x-1/2 z-10 mt-6" />

            {/* Content Card */}
            <div className="flex-1 md:w-1/2 pl-12 md:pl-0">
              <div
                className={`p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                {/* Connector Line for Desktop */}
                <div
                  className={`hidden md:block absolute top-8 w-8 h-[2px] bg-slate-200 ${
                    index % 2 === 0 ? "-left-8" : "-right-8"
                  }`}
                />

                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full font-[Lexend]">
                  {exp.period}
                </span>
                
                <h3 className="text-xl font-bold text-slate-800 font-[Lexend]">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-slate-500 mb-4 font-[Lexend]">
                  {exp.company}
                </h4>
                
                <p className="text-slate-600 leading-relaxed text-sm mb-4 font-[Lexend]">
                  {exp.description}
                </p>

                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
                  }`}
                >
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-[10px] font-medium text-slate-500 border border-slate-200 rounded-md bg-slate-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Empty Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;