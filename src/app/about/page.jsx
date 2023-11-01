import AnimatedNumbers from "@/components/AnimatedNumbers";
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Image from "next/image";
import React from "react";

export default function about() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center mb-16">
        <div className="w-full h-full inline-block z-0 px-32 sc-sm:px-10 sc-md:px-16 sc-lg:px-32 pt-16 containerResponsive">
          <AnimatedText text="Passion Fuel Purpose!" styles="mb-16 text-7xl sc-lg:text-7xl sc-sm:text-6xl 
          sc-xs:text-4xl sc-sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sc-sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start sc-xl:col-span-4 sc-md:order-2 sc-md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 darkModeText">
                Biography
              </h2>
              <p className="mb-4 font-medium">
                Hello! I&apos;m Derick Maitland, a passionate web developer with
                4 years of continuous learning. During my journey in the
                industry, I have acquired skills in Python, HTML, CSS,
                JavaScript, and React, and my thirst for knowledge never stops.
              </p>

              <p className="mb-4 font-medium">
                My main focus is to create websites and applications that are
                visually appealing, and highly functional. My goal is highly
                responsive solutions responsive, with optimal performance, and
                designed following the best SEO practices available in the
                industry.
              </p>

              <p className="mb-4 font-medium">
                Although my experience is still developing, my enthusiasm for
                technology and creating solutions keeps me constantly motivated.
                I believe that web development is the perfect blend of
                creativity and technology, which allows me to tackle exciting
                challenges and think of innovative solutions.
              </p>

              <p className="mb-4 font-medium">
                One of my goals is to create my web development agency. I dream
                of being able to help small and medium-sized businesses
                modernize their systems, websites, and applications, providing
                them with agile and modern solutions to meet the challenges of
                digital transformation.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl p-8 imgBorderLight imgBorderDark 
            sc-xl:col-span-4 sc-md:order-1 sc-md:col-span-8">
              <div className="">
                <Image
                  src={"/bgphoto.png"}
                  alt="Profile Photo DM"
                  width={500}
                  height={500}
                  className="rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between sc-xl:col-span-8 
            sc-xl:flex-row sc-xl:items-center sc-md:order-3">
              <div className="flex flex-col items-end justify-center sc-xl:items-center">
                <span className="inline-block text-7xl font-bold sc-md:text-6xl sc-sm:text-5xl sc-xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                sc-xl:text-center sc-md:text-lg sc-sm:text-base sc-xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center sc-xl:items-center">
                <span className="inline-block text-7xl font-bold sc-md:text-6xl sc-sm:text-5xl sc-xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                sc-xl:text-center sc-md:text-lg sc-sm:text-base sc-xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center sc-xl:items-center">
                <span className="inline-block text-7xl font-bold sc-md:text-6xl sc-sm:text-5xl sc-xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                sc-xl:text-center sc-md:text-lg sc-sm:text-base sc-xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
}
