import Link from "next/link";
import { SpinLogo } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed right-10 bottom-20 flex items-center justify-center overflow-hidden">
      <div className="w-40 h-auto flex items-center justify-center relative">
        <SpinLogo className={"animate-spin-slow fill-dark dark:fill-light"} />
        <Link
          href="mailto:derickmaitland@dmaitlanddev.com"
          target={"_blank"}
          className="flex items-center justify-center absolute w-20 h-20 rounded-full lightModeBtn darkModeBtn"
        >
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
