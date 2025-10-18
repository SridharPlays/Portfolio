import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import StaggeredMenu from "./components/StaggeredMenu";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Discord", link: "https://discord.com/users/738966907914420276" },
  { label: "GitHub", link: "https://github.com/SridharPlays" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/sridhar-n-65b545316/" },
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseOver = (e) => {
    if (e.target.closest("a") || e.target.closest("button")) {
      setIsHovered(true);
    }
  };

  const handleMouseOut = (e) => {
    if (e.target.closest("a") || e.target.closest("button")) {
      setIsHovered(false);
    }
  };

  const cursorVariants = {
    default: {
      scale: 1,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    hovered: {
      scale: 1.5,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    clicked: {
      scale: 1.2,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  };

  const dotVariants = {
    default: {
      scale: 1,
    },
    hovered: {
      scale: 0.5,
    },
    clicked: {
      scale: 0.8,
    },
  };

  return (
    <main
      className="bg-[#fefefe] font-[Lexend] text-slate-800 overflow-hidden cursor-none"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-black pointer-events-none z-50 flex items-center justify-center"
        variants={cursorVariants}
        animate={isClicked ? "clicked" : isHovered ? "hovered" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <motion.div
          className="w-1 h-1 bg-black rounded-full"
          variants={dotVariants}
          animate={isClicked ? "clicked" : isHovered ? "hovered" : "default"}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        />
      </motion.div>

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default App;