"use client";

import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
    bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
         bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="21vw" y="7vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="Python" x="30vw" y="-5vw" />
        <Skill name="HTML" x="0vw" y="-22vw" />
        <Skill name="SQL" x="-31vw" y="-3vw" />
        <Skill name="GIT" x="-18vw" y="3vw" />
        <Skill name="Figma" x="-25vw" y="16vw" />
        <Skill name="Web Design" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
