import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import ParticlesContainer from "@/components/ParticlesContainer";
import Image from "next/image";
import Link from "next/link";
import { FaRegFilePdf, FaEnvelopeOpenText } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-full">
      <ParticlesContainer/>
      <div className="w-full h-full inline-block z-0">
        <div className="flex items-center justify-center w-full my-8 px-20">
          <div className="mr-20">
            <Image
              src={"/profile.jpg"}
              alt="DmaitlandDev Profile"
              width={500}
              height={600}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center self-center mx-15">
            <AnimatedText
              text="I'm Derick Maitland. A passionate web developer in training."
              styles="text-6xl text-left"
            />
            <p className="my-4 text-base font-medium ">
              My goal is to create amazing and effective web solutions that are
              personalized to your unique needs. Ready to get started? Explore
              my portfolio and find out how I can help you stand out online –
              contact me today!
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/cvi.pdf"
                target={"_blank"}
                className=" flex items-center bg-primary text-light p-2.5 px-6 rounded-lg text-lg
              font-medium hover:bg-secondary hover:text-primary border-2 border-solid border-transparent
               hover:border-primary transition-all" download="true"
              >
                Resume <FaRegFilePdf className="w-6 ml-1"/>
              </Link>
              <Link
                href="mailto:derickmaitland@dmaitlanddev.com"
                target={"_blank"}
                className="flex items-center ml-4 text-lg font-medium capitalize text-primary underline underline-offset-2 "
              >
                Contact me <FaEnvelopeOpenText className="w-6 ml-1"/>
              </Link>
            </div>
          </div>
        </div>
        <HireMe/>
      </div>
    </main>
  );
}
