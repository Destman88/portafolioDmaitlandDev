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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        {mode === "dark" ? <LogoLight /> : <Logo />}
      </div>
    </header>
  );
};

export default Navbar;
