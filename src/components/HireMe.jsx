import Link from "next/link";
import { SpinLogo } from "./Icons";

const HireMe = () => {
  return (
    <div
      className="fixed z-20 right-10 bottom-20 flex items-center justify-center overflow-hidden 
    sc-md:right-2 sc-md:left-auto sc-md:top-2 sc-md:bottom-auto sc-md:absolute"
    >
      <div className="w-40 h-auto flex items-center justify-center relative sc-md:w-24 ">
        <SpinLogo className={"animate-spin-slow fill-dark dark:fill-light"} />
        <Link
          href="mailto:derickmaitland@dmaitlanddev.com"
          target={"_blank"}
          className="flex items-center justify-center absolute w-20 h-20 rounded-full lightModeBtn darkModeBtn 
          sc-md:w-12 sc-md:h-12 sc-md:text-[10px]"
        >
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
