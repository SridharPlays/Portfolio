import React from "react";
import PixelBlast from "../components/PixelBlast";
import ScrambledText from "../components/ScrambledText";

function HomePage() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4 text-slate-500">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="diamond"
          pixelSize={6}
          color="#B497CF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={1.55}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl pointer-events-none">
        <h2 className="text-lg md:text-2xl leading-relaxed">
          Hello, I'm{" "}
          <div className="relative inline-block group mx-1 pointer-events-auto">
            <span className="font-medium text-emerald-500 cursor-default">
              Sridhar N
            </span>
            {/* Tooltip: Cleaned up positioning for stability */}
            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded shadow-sm">
              Currently Studying @ CHRIST
            </span>
          </div>
          . I{" "}
          <span className="font-medium text-2xl md:text-3xl font-[Reddit_Sans] text-orange-500 italic underline">
            craft
          </span>{" "}
          and{" "}
          <span className="text-4xl md:text-5xl font-[Meow_Script] text-rose-600 font-semibold md:mx-1.5">
            develop
          </span>{" "}
          robust software that solves real-world problems—focusing on clean code
          and user-centric design to deliver value faster.
        </h2>
        
        <div className="flex justify-center mt-6">
          <ScrambledText
            className="pointer-events-auto !m-0 !max-w-none !font-[Lexend] !text-lg !text-slate-600 dark:!text-slate-300 inline-block cursor-default"
            radius={80}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:!<>_~*"
          >
            Open to new opportunities where I can help teams build impactful products.
          </ScrambledText>
        </div>
      </div>
    </section>
  );
}

export default HomePage;