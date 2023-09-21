"use client";
import React, { useState, useEffect } from "react";
import { UpIcon } from "./Icons";

const ScrollToTop = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolledToTop(false);
    } else {
      setScrolledToTop(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrolledToTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-10 w-10 rounded-full text-2xl fixed right-10 bottom-20 flex items-center justify-center overflow-hidden bg-auxiliarPurple dark:bg-light opacity-90 ${
        scrolledToTop ? "hidden" : ""
      }`}
    >
      {!scrolledToTop && (
        <button onClick={scrollToTop}>
          <UpIcon className={"fill-dark"} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
