import AnimatedText from "@/components/AnimatedText";
import FeaturedProject from "@/components/FeaturedProject";
import project1 from "../../../public/project1.jpg";
import Project from "@/components/Project";
import TransitionEffect from "@/components/TransitionEffect";
export default function project() {
  return (
    <>
      <main className=" w-full mb-16 flex flex-col items-center justify-center">
        <TransitionEffect />
        <div className=" w-full h-full inline-block z-0 px-32 sc-sm:px-10 sc-md:px-16 sc-lg:px-32 pt-16 containerResponsive">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            styles="text-8xl mb-16 sc-lg:text-7xl sc-sm:text-6xl sc-xs:text-4xl sc-sm:mb-8"
          />
          <div className=" grid grid-cols-12 gap-24 sc-xl:gap-x-16 sc-lg:gap-x-8 sc-md:gap-y-24 sc-sm:gap-x-0">
            <div className=" col-span-12">
              <FeaturedProject
                title="Project1"
                img={project1}
                summary="descripcion del proyecto"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sc-sm:col-span-12">
              <Project
                title="Project1"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sc-sm:col-span-12">
              <Project
                title="Project1"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
