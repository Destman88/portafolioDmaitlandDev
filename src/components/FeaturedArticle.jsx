"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" col-span-1 w-full p-4 rounded-2xl imgBorderLight imgBorderDark">
      <Link
        href={link}
        target="_blank"
        className=" w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank" className="">
        <h2 className=" capitalize text-2xl font-bold my-2 mt-4 hover:underline sc-xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className=" text-sm mb-2">{summary}</p>
      <span className="text-auxiliarPurple dark:text-secondary font-medium">
        {time}
      </span>
    </li>
  );
};

export default FeaturedArticle;
