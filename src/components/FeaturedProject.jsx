import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light p-12 custom-shadow "
    >
      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className=" w-full h-auto" />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <FaGithub className=" text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-primary text-light p-2 px-6 text-lg 
            hover:bg-secondary hover:text-primary border-2 border-solid border-transparent
            hover:border-primary transition-all font-medium"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;