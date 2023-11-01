"use client";

import Link from "next/link";
import Logo from "./Logo";
import { SunIcon, MoonIcon } from "./Icons";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import LogoLight from "./LogoLight";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, title, styles = "" }) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${styles} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full
      transition-[width] ease duration-300 ${
        path === href ? "w-full" : "w-0"
      } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, styles = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${styles} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full
      transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 
    sc-lg:px-16 sc-md:px-12 sc-sm:px-8">
      <button
        className="flex-col justify-center items-center hidden sc-lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-md ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-md my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-md ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className=" w-full flex justify-between items-center sc-lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" styles="mr-4" />
          <CustomLink href="/about" title="About" styles="mx-4" />
          <CustomLink href="/projects" title="Projects" styles="mx-4" />
          <CustomLink href="/articles" title="Articles" styles="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-4">
          <motion.a
            href="https://www.facebook.com/dmaitlanddev"
            target={"_blank"}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/dmaitland_dev/"
            target={"_blank"}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/derickmaitland88/"
            target={"_blank"}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            href="https://github.com/Destman88"
            target={"_blank"}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@dmaitland_dev?lang=es"
            target={"_blank"}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <FaTiktok />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/channel/UCjnf5W54PpG56fSJRLf01_w"
            target={"_blank"}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <FaYoutube />
          </motion.a>

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 bg-dark/75 text-light dark:bg-light/75 dark:text-dark
      rounded-2xl backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              styles=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              styles=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              styles=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              styles=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap gap-4 mt-4 sc-sm:gap-1">
            <motion.a
              href="https://www.facebook.com/dmaitlanddev"
              target={"_blank"}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dmaitland_dev/"
              target={"_blank"}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/derickmaitland88/"
              target={"_blank"}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="https://github.com/Destman88"
              target={"_blank"}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@dmaitland_dev?lang=es"
              target={"_blank"}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <FaTiktok />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCjnf5W54PpG56fSJRLf01_w"
              target={"_blank"}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <FaYoutube />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        {mode === "dark" ? <LogoLight /> : <Logo />}
      </div>
    </header>
  );
};

export default Navbar;
