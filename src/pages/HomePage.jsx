import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

function HomePage() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
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
            <span className="text-sm opacity-0 w-fit absolute -top-5 -right-1/2 md:group-hover:opacity-100 duration-200">
              Currently Studying @ CHRIST
            </span>
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
  );
}

export default HomePage;