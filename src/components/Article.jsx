"use client";

import { motion } from "framer-motion";
import MovingImg from "./MovingImg";

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between 
    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 
    dark:bg-dark dark:text-light dark:border dark:border-solid dark:border-light dark:border-r-4 dark:border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-auxiliarPurple dark:text-secondary font-medium pl-4">{date}</span>
    </motion.li>
  );
};

export default Article;
