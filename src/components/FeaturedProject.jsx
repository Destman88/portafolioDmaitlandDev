"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light p-12 imgBorderLight imgBorderDark 
    sc-lg:flex-col sc-lg:p-8 sc-xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg sc-lg:w-full"
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
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 sc-lg:w-full sc-lg:pl-0 sc-lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-secondary sc-xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sc-sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sc-sm:text-sm">{summary}</p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <FaGithub className=" text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg p-2 px-6 text-lg lightModeBtn darkModeBtn sc-sm:px-4 sc-sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
