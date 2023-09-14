import Image from "next/image";
import Link from "next/link";
import React from "react";

const HireMe = () => {
  return (
    <div className="fixed right-6 bottom-20 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Image
          width={150}
          height={150}
          alt="Hire Me!"
          src={"/hireme.png"}
          className="animate-spin-slow"
        />
        <Link
          href="mailto:derickmaitland@dmaitlanddev.com"
          target={"_blank"}
          className="flex items-center justify-center absolute bg-primary text-light 
          shadow-lg border-2 border-solid border-primary w-20 h-20 rounded-full font-medium 
          hover:bg-secondary hover:text-primary transition-all"
        >
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
