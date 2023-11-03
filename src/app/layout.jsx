import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Derick Maitland | Web Developer",
  description:
    "Soy un desarrollador web junior con experiencia en HTML, CSS y JavaScript. Estoy buscando oportunidades para desarrollar mis habilidades y experiencia en el campo del desarrollo web.",
  keywords:
    "desarrollador web junior, HTML, CSS, JavaScript, React, Node, Python",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} lightModeBg darkModeBg`}>
        <Script id="theme-switcher">
          {`if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')}`}
        </Script>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
