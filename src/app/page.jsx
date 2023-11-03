import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import ParticlesContainer from "@/components/ParticlesContainer";
import Image from "next/image";
import photo from "../../public/profile.jpg";
import Link from "next/link";
import { FaRegFilePdf, FaEnvelopeOpenText } from "react-icons/fa6";
import Footer from "@/components/Footer";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <main className="flex-col items-center w-full h-full">
      <TransitionEffect />
      <ParticlesContainer />
      <div className="w-full h-full inline-block z-0 px-32 sc-sm:px-10 sc-md:px-16 sc-lg:px-32 containerResponsive pt-8 sc-md:pt-16 sc-sm:pt-8 ">
        <div className="flex items-center justify-between w-full sc-lg:flex-col">
          <div className="w-1/2 sc-md:w-full">
            <Image
              src={photo}
              alt="DmaitlandDev Profile"
              className="w-[400px] sc-lg:hidden sc-md:inline-block sc-md:w-full sc-md:mb-4 sc-sm:px-20 sc-md:px-32"
              sizes="(min-width: 808px) 50vw, 100vw"
              priority
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center sc-lg:w-full ">
            <AnimatedText
              text="I'm Derick Maitland. A passionate web developer in training."
              styles="text-6xl text-left darkModeText sc-xl:text-5xl sc-lg:text-center sc-lg:text-6xl sc-md:text-5xl sc-sm:text-3xl"
            />
            <p className="my-4 text-base font-medium sc-md:text-sm sc-sm:text-xs ">
              My goal is to create amazing and effective web solutions that are
              personalized to your unique needs. Ready to get started? Explore
              my portfolio and find out how I can help you stand out online –
              contact me today!
            </p>
            <div className="flex items-center self-start mt-2 sc-lg:self-center">
              <Link
                href="/cvi.pdf"
                target={"_blank"}
                className=" flex items-center p-2.5 px-6 rounded-lg text-lg lightModeBtn darkModeBtn 
                sc-md:p-2 sc-md:px-4 sc-md:text-base"
                download="true"
              >
                Resume <FaRegFilePdf className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:derickmaitland@dmaitlanddev.com"
                target={"_blank"}
                className="flex items-center ml-4 text-lg font-medium capitalize text-primary underline underline-offset-2 
                hover:text-auxiliarPurple dark:text-secondary dark:hover:text-light sc-md:text-base"
              >
                Contact me <FaEnvelopeOpenText className="w-6 ml-1" />
              </Link>
            </div>
          </div>
        </div>
        <HireMe />
      </div>
      <footer className="w-full font-medium text-lg bg-light fixed bottom-0 left-0 dark:bg-dark dark:text-white sc-md:hidden">
        <div className="px-10 flex items-center justify-between">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div className="flex items-center">
            Build With{" "}
            <span className="text-2xl text-red-500 px-1">&#9825;</span>
            by&nbsp;
            <Link
              href="https://dmaitlanddev.com/"
              className="underline underline-offset-2 hover:text-auxiliarPurple dark:hover:text-secondary "
            >
              Dmaitland Dev
            </Link>
          </div>
          <Link href="/">Say Hello</Link>
        </div>
      </footer>
      <div className="hidden sc-md:block">
        <Footer />
      </div>
    </main>
  );
}
