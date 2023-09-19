import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className=" w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light shadow-2xl p-6 relative custom-shadow "
    >
      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className=" w-full h-auto" />
      </Link>
      <div className=" w-full flex flex-col items-center justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
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
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
