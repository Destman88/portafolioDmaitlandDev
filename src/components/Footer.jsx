import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full font-medium text-lg lightModeBg darkModeBg sc-md:text-base">
      <div className="px-10 flex items-center justify-between sc-lg:flex-col sc-lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build With <span className="text-2xl text-red-500 px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://dmaitlanddev.com/"
            className="underline underline-offset-2 hover:text-auxiliarPurple dark:hover:text-secondary"
          >
            Dmaitland Dev
          </Link>
        </div>
        <Link href="/">Say Hello</Link>
      </div>
    </footer>
  );
};

export default Footer;
