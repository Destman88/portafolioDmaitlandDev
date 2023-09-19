import AnimatedText from "@/components/AnimatedText";
import FeaturedProject from "@/components/FeaturedProject";
import project1 from "../../../public/project1.jpg";
import Project from "@/components/Project";
export default function project() {
  return (
    <>
      <main className=" w-full mb-16 flex flex-col items-center justify-center">
        <div className=" w-full h-full inline-block z-0 px-32 pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            styles="text-8xl mb-16"
          />
          <div className=" grid grid-cols-12 gap-24">
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
            <div className=" col-span-6">
              <Project
                title="Project1"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6">
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
