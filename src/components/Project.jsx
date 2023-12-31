"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative  imgBorderLight imgBorderDark 
    sc-lg:flex-col sc-lg:p-8 sc-xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
        />
      </Link>
      <div className=" w-full flex flex-col items-center justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-secondary sc-lg:text-lg sc-md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold sc-lg:text-2xl">{title}</h2>
        </Link>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 sc-md:w-6">
            <FaGithub className=" text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg p-2 px-6 text-lg lightModeBtn darkModeBtn sc-md:text-base"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
