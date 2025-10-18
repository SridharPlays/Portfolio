import React, { useState } from "react";
import Dock from "./components/Dock.jsx";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscClose,
} from "react-icons/vsc";
import Iridescence from "./components/Iridescence.jsx";
import GlassSurface from "./components/ui/GlassSurface.jsx";
import ShinyText from "./components/ShinyText.jsx";
import ScrollFloat from "./components/ScrollFloat.jsx";

// Settings Modal Component
const SettingsModal = ({ isOpen, onClose, glassEffect, setGlassEffect }) => {
  if (!isOpen) return null;

  const toggleButtonClasses = glassEffect
    ? "bg-green-500 justify-start"
    : "bg-gray-600 justify-end";

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 text-white bg-gray-200/20 backdrop-blur-sm border-2 rounded-2xl border-neutral-50/20 shadow-xl">
        <button
          onClick={onClose}
          className="absolute text-2xl text-gray-400 top-4 right-4 transition-all duration-300 hover:text-white"
        >
          <VscClose />
        </button>
        <h2 className="text-2xl font-bold">Performance Settings</h2>
        <p className="mt-2 text-gray-400">Adjust visual effects to optimize performance.</p>
        <div className="flex items-center justify-between p-4 mt-6 rounded-lg bg-gray-900/30">
          <div>
            <h3 className="font-semibold">Glass Effect</h3>
            <p className="text-sm text-gray-400">Adds a frosted glass look to UI elements.</p>
          </div>
          <button
            onClick={() => setGlassEffect(!glassEffect)}
            className={`w-14 h-8 rounded-full flex items-center p-1 transition-all duration-300 ${toggleButtonClasses}`}
          >
            <div className="w-6 h-6 bg-white rounded-full shadow-md" />
          </button>
        </div>
        <div className="p-3 mt-4 text-xs font-medium text-center text-yellow-400 rounded-lg bg-yellow-900/30">
          If you have a lower-spec PC, turning this off may improve performance.
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isGlassEffectEnabled, setGlassEffectEnabled] = useState(true);

  // event listeners for closing modal on 'Escape' key press
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Backspace" && isSettingsOpen) {
        setSettingsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSettingsOpen]);

  const items = [
    {
      icon: <VscHome size={20} />,
      label: "Home",
      onClick: () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    {
      icon: <VscAccount size={20} />,
      label: "About Me",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <VscArchive size={20} />,
      label: "Project",
      onClick: () => {
        const projectSection = document.getElementById("project");
        if (projectSection) {
          projectSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    {
      icon: <VscSettingsGear size={20} />,
      label: "Settings",
      onClick: () => setSettingsOpen(true),
    },
  ];

  const ProjectCardContent = () => (
    <div className="flex items-start justify-center flex-col p-10 gap-6">
      <h2 className="text-3xl text-left">Connectify</h2>
      <p className="text-lg font-[DM_Sans] tracking-normal">
        A full-stack, real-time messaging application engineered to provide seamless, instantaneous communication. The project was architected using the MERN stack and deployed to provide a robust and scalable chat solution.
      </p>
      <img src="./image.png" alt="Connectify_Demo" className="rounded-2xl"/>
    </div>
  );

  return (
    <>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
        glassEffect={isGlassEffectEnabled}
        setGlassEffect={setGlassEffectEnabled}
      />

      <div className="min-h-screen font-[DM_Sans] relative" id="home">
        <Iridescence
          className="fixed inset-0 -z-10 h-full w-full"
          color={[0, 0.6, 0.7]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        >
        <div className="fixed inset-0 bg-black/30"></div>
        </Iridescence>
          <ShinyText
            text="You have an idea. I have the code to make it real."
            disabled={false}
            speed={2}
            className="font-medium font-[DM_Sans] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          />

        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
            glassEffect={!isGlassEffectEnabled}
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col w-full h-auto bg-[#fefefe]">
        <div className="flex items-center justify-center flex-col w-full min-h-screen text-5xl font-semibold tracking-tight text-slate-800 font-[Poppins]">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="start bottom+=10%"
            scrollEnd="center bottom-=40%"
            stagger={0.03}
          >
            About Me
          </ScrollFloat>

          <div className="w-full max-w-4xl rounded-3xl bg-[#faf9f7] text-slate-900 p-10">
            <h2 className="text-3xl text-left">Hi, I'm Sridhar!</h2>
            <p className="text-lg font-[DM_Sans] tracking-normal">
              I am a second-year Computer Science student at the CHRIST University of Bengaluru, specializing in full-stack web development. I'm passionate about building intuitive, high-performance applications that solve real-world problems.
            </p>
            <div className="flex items-center justify-center space-x-6">
            <img src="./CHRIST_Logo_White.png" alt="University_Logo" className="mt-6 w-96"/>
              <div className="h-20 md:h-24 w-1 bg-blue-900"></div>
            <img src="./CAPS_White.png" alt="CAPS_Logo" className="mt-6 w-96"/>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col w-full min-h-screen text-5xl font-semibold tracking-tight text-slate-800 font-[Poppins]">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="start bottom+=10%"
            scrollEnd="center bottom-=40%"
            stagger={0.03}
          >
            Projects
          </ScrollFloat>
          
          {isGlassEffectEnabled ? (
            <div id="project" className="w-full max-w-4xl rounded-3xl bg-neutral-300/10 border-2 text-white border-neutral-300/20">
              <ProjectCardContent/>
            </div>
          ) : (
            <GlassSurface
              width={900}
              height={"auto"}
              className="w-full"
            >
              <ProjectCardContent />
            </GlassSurface>
          )}
        </div>
      </div>

    </>
  );
}

export default App;

