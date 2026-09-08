import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscClose } from "react-icons/vsc";

const projects = [
  {
    title: "CAPS Website",
    description: "Official portal for student academic support.",
    longDescription: "A comprehensive web portal designed for the Centre for Academic and Professional Support, facilitating student access to resources, appointments, and event registrations.",
    tags: ["Tailwind", "UI/UX"],
    size: "md:col-span-2 md:row-span-2",
    image: "CAPSWebsite.png",
    bgColor: "bg-blue-100",
  },
  {
    title: "Connectify",
    description: "Real-time MERN stack chat application.",
    longDescription: "A robust real-time messaging platform built with the MERN stack and Socket.io, featuring instant messaging, user authentication, and chat rooms.",
    tags: ["MERN", "Socket.io"],
    size: "md:col-span-2 md:row-span-2",
    image: "Connectify.png",
    bgColor: "bg-indigo-100",
  },
  {
    title: "CAPS Attendance 2.1",
    description: "Attendance management system.",
    longDescription: "An automated attendance tracking system leveraging Google Apps Script and Sheets to streamline record-keeping for large student workshops.",
    tags: ["AppScript", "Google Sheets"],
    size: "md:col-span-2 md:row-span-2",
    image: "CAPSAttendance.png",
    bgColor: "bg-green-100",
  },
  {
    title: "Psychometric Automation",
    description: "Automated test scoring tool.",
    longDescription: "A Python-based automation tool that processes psychometric test data, generating instant scoring reports and reducing manual analysis time by 90%.",
    tags: ["Python", "Automation"],
    size: "md:col-span-1 md:row-span-1",
    bgColor: "bg-slate-200",
  },
  {
    title: "Bengaluru Cares",
    description: "Volunteer platform.",
    longDescription: "A community-focused platform built with Streamlit to connect volunteers with local NGOs and civic issues in Bengaluru.",
    tags: ["Python", "Streamlit"],
    size: "md:col-span-1 md:row-span-1",
    bgColor: "bg-yellow-100",
  },
  {
    title: "AURA Music",
    description: "Native Kotlin music player.",
    longDescription: "A lightweight, material design music player for Android built with Kotlin, featuring background playback and local file management.",
    tags: ["Kotlin", "Android"],
    size: "md:col-span-1 md:row-span-1",
    bgColor: "bg-purple-100",
  },
  {
    title: "CineFlix",
    description: "Ticket booking app.",
    longDescription: "A movie ticket booking web application featuring seat selection, showtime scheduling, and a responsive frontend.",
    tags: ["Full Stack", "Web", "Cloud"],
    size: "md:col-span-1 md:row-span-1",
    bgColor: "bg-red-100",
  },
  {
    title: "Dear Stranger",
    description: "Found phone narrative game.",
    longDescription: "An immersive narrative mystery game built in React Native where players explore a fictional smartphone interface to solve a story.",
    tags: ["React Native", "Game"],
    size: "md:col-span-1 md:row-span-1",
    image: "DearStranger.png",
    bgColor: "bg-orange-100",
  },
  {
    title: "Service Request",
    description: "Automated forms.",
    longDescription: "An automated service request workflow using Google Forms and Apps Script to route tickets to the appropriate departments.",
    tags: ["Apps Script"],
    size: "md:col-span-1 md:row-span-1",
    image: null, 
    bgColor: "bg-cyan-100",
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold font-[Meow_Script] mb-4">My Work</h1>
        <p className="text-slate-500 font-[Lexend] max-w-xl mx-auto">
          A collection of digital experiences, ranging from full-stack platforms
          to automation tools and mobile apps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[180px] grid-flow-dense">
        {projects.map((project, index) => {
          const hasImage = Boolean(project.image);
          const textColorClass = hasImage ? "text-white" : "text-slate-800";
          const subTextColorClass = hasImage ? "text-slate-200" : "text-slate-600";

          return (
            <motion.div
              key={index}
              layoutId={`project-${index}`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden border border-slate-200 cursor-pointer hover:shadow-xl transition-all duration-300 ${project.size} ${!hasImage ? project.bgColor : "bg-slate-900"}`}
            >
              {/* Background: Image OR Color */}
              {hasImage ? (
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              ) : (
                 // No overlay needed for color background, maybe a subtle hover effect
                 <div className="absolute inset-0 z-0 opacity-100 group-hover:brightness-95 transition-all duration-300" />
              )}

              {/* Content Overlay */}
              <div className={`relative z-10 flex flex-col justify-end h-full p-6 ${textColorClass}`}>
                <h3 className="text-xl font-bold font-[Lexend] mb-1 drop-shadow-md">
                  {project.title}
                </h3>
                <p className={`text-sm font-light mb-3 line-clamp-2 drop-shadow-sm font-[Lexend] ${subTextColorClass}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 backdrop-blur-md rounded-md text-[10px] font-medium tracking-wide border ${
                        hasImage 
                          ? "bg-white/20 border-white/10 text-white" 
                          : "bg-white/60 border-black/5 text-slate-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`project-modal-${selectedProject.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <VscClose size={20} />
              </button>

              {/* Modal Image Header */}
              <div className={`relative h-64 md:h-80 w-full shrink-0 ${!selectedProject.image ? selectedProject.bgColor : "bg-slate-900"}`}>
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-slate-400 opacity-20">
                     {/* Optional: Add an icon here if desired */}
                     <span className="text-6xl font-black">{selectedProject.title.charAt(0)}</span>
                   </div>
                )}
                {/* Gradient for text contrast if image exists */}
                {selectedProject.image && <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />}
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h2 className={`text-3xl md:text-4xl font-bold font-[Meow_Script] ${selectedProject.image ? "text-white" : "text-slate-800"}`}>
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto bg-white">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-[Lexend]">About this project</h3>
                <p className="text-slate-600 leading-relaxed font-[Lexend]">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Optional: Add Link Button */}
                <div className="mt-8">
                   <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors w-full md:w-auto">
                     View Project
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPage;