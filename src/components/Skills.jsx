"use client";

import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
    bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark 
    sc-lg:py-2 sc-lg:px-4 sc-md:text-sm sc-md:py-1.5 sc-md:px-3 sc-xs:bg-transparent sc-xs:dark:bg-transparent 
    sc-xs:text-dark sc-xs:dark:text-light sc-xs:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center sc-md:text-6xl sc-md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full 
      bg-circularLight dark:bg-circularDark sc-lg:bg-circularLightLg sc-lg:dark:bg-circularDarkLg
      sc-md:bg-circularLightMd sc-md:dark:bg-circularDarkMd sc-sm:bg-circularLightSm sc-sm:dark:bg-circularDarkSm
      sc-lg:h-[80vh] sc-sm:h-[60vh] sc-xs:h-[50vh]">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold
         bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark 
         sc-lg:p-6 sc-md:p-4 sc-xs:text-xs sc-xs:p-2"
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
