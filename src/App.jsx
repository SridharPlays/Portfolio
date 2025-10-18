import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StaggeredMenu from "./components/StaggeredMenu";
import MagicBento from "./components/MagicBento";

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

const greetings = [
  "Hello,",
  "नमस्ते,",
  "வணக்கம்,",
  "నమస్కారం,",
  "ನಮಸ್ಕಾರ,",
  "ഹലോ,",
  "হ্যালো,",
  "नमस्कार,",
  "Hola,",
  "Bonjour,",
  "Ciao,",
  "Hallo,",
];

function App() {
  const [greetingIndex, setGreetingIndex] = useState(0);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseOver = (e) => {
    if (
      e.target.closest("a") ||
      e.target.closest("button")
    ) {
      setIsHovered(true);
    }
  };

  const handleMouseOut = (e) => {
    if (
      e.target.closest("a") ||
      e.target.closest("button")
    ) {
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
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />

      <section className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4">
        <div className="text-center max-w-4xl">
          <h2 className="text-lg md:text-2xl">
            <span className="inline-block text-right min-w-[135px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={greetings[greetingIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {greetings[greetingIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "} 
            <div className="relative inline-block group mx-1">
              I'm <span className="font-medium">Sridhar N</span>. I{" "}
              <span className="text-sm opacity-0 w-fit absolute -top-5 -right-1/2 md:group-hover:opacity-100 duration-200">Currently Studying @ CHRIST</span>
            </div>
            <span className="font-medium text-2xl md:text-3xl font-[Reddit_Sans] italic underline">
              craft
            </span>{" "}
            and{" "}
            <span className="text-4xl md:text-5xl font-[Meow_Script] font-semibold md:mx-1.5">
              develop
            </span>{" "}
            robust software that solves real-world problems—focusing on clean
            code and user-centric design to deliver value faster.
          </h2>
          <p>
            Open to new opportunities where I can help teams build impactful
            products.
          </p>
        </div>
      </section>

      {/* <section className="flex min-h-screen flex-col items-center justify-center p-4">
        <MagicBento
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={false}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </section> */}
    </main>
  );
}

export default App;