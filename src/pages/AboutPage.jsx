import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function AboutPage() {
  return (
    // Reverted to original classes: only applies dark bg if dark mode is active
    <div className="flex min-h-screen items-center justify-center p-4 dark:bg-gray-900">
      <motion.div
        className="max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          // Reverted to original text colors
          className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
          variants={itemVariants}
        >
          Hello. 👋
        </motion.h1>

        <motion.p
          className="mb-6 text-lg text-gray-700 dark:text-gray-300 md:text-xl"
          variants={itemVariants}
        >
          I'm a developer obsessed with structure. I have a certain "OCD" when it comes to UI—I need every pixel to be precise and every interaction to be clean.
        </motion.p>

        <motion.p
          className="mb-6 text-lg text-gray-700 dark:text-gray-300 md:text-xl"
          variants={itemVariants}
        >
          Otherwise, I'm a pretty boring person. I'm an introvert who prefers dark themes and quiet spaces. You'll usually find me listening to music or watching movies.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 md:text-xl"
          variants={itemVariants}
        >
          I'm a huge fan of Game of Thrones, and I love getting lost in Sci-Fi, Thriller, and Mystery genres.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default AboutPage;