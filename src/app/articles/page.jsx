import AnimatedText from "@/components/AnimatedText";
import project1 from "../../../public/project1.jpg";
import FeaturedArticle from "@/components/FeaturedArticle";
import Article from "@/components/Article";



export default function articles() {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full h-full inline-block z-0 px-32 pt-16">
          <AnimatedText
            text="Words can change the world!"
            styles="text-8xl mb-16"
          />
          <ul className=" grid grid-cols-3 gap-16">
            <FeaturedArticle
              title="titulo de articulo"
              summary="contenido de articulo"
              time="9 min read"
              link="/"
              img={project1}
            />
            <FeaturedArticle
              title="titulo de articulo"
              summary="contenido de articulo"
              time="9 min read"
              link="/"
              img={project1}
            />
            <FeaturedArticle
              title="titulo de articulo"
              summary="contenido de articulo"
              time="9 min read"
              link="/"
              img={project1}
            />
          </ul>
          <h2 className=" font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
          <ul>
          <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
            <Article
            title="titulo"
            date="fecha"
            link="/"
            img={project1}/>
          </ul>
        </div>
      </main>
    </>
  );
}
