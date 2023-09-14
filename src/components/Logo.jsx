"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        whileHover={{ scale: [null, 1.5, 1.4], rotate: [0, 0, 180, 360, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <Image
          width={50}
          height={50}
          alt="logo Dmaitland Dev"
          src={"/logo.png"}
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
