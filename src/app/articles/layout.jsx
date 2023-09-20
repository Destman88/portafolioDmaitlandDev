import Footer from "@/components/Footer";

export const metadata = {
  title: "Derick Maitland | Articles",
  description:
    "Soy un desarrollador web junior con experiencia en HTML, CSS y JavaScript. Estoy buscando oportunidades para desarrollar mis habilidades y experiencia en el campo del desarrollo web.",
  keywords:
    "desarrollador web junior, HTML, CSS, JavaScript, React, Node, Python",
};

export default function articleLayout({ children }) {
  return (
    <>
      {children}
      <div className="w-full font-medium text-lg bg-light">
        <Footer />
      </div>
    </>
  );
}