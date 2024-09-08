import cProject from "@/assets/images/C-Project.jpg";
import javaProject from "@/assets/images/java.png";
import protfolioProject from "@/assets/images/protfolioImage.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    languages: "C Language",
    title: "Project Manager ",
    results: [
      { title: "Fast and lightweight due to C's low-level nature" },
      {
        title:
          "Command-line interface offers flexibility and simplicity for developers",
      },
      { title: "Focuses on minimizing memory usage" },
    ],
    link: "#",
    image: cProject,
  },
  {
    languages: "Java PostgreSql",
    title: "Shopping Cart Application",
    results: [
      {
        title:
          "Object-oriented structure allows for scalability and easy maintenance",
      },
      {
        title:
          "PostgreSQL provides reliable, high-performance database management",
      },
    ],
    link: "#",
    image: javaProject,
  },
  {
    languages: "Nextjs TailWind CSS-Animations",
    title: " Portfolio Website",
    results: [
      { title: "Responsive design ensures accessibility across devices" },
      {
        title:
          "Modern web technologies that make the website dynamic and interactive.",
      },
      {
        title:
          "Clean user interface with smooth navigation enhances the user experience",
      },
    ],
    link: "#",
    image: protfolioProject,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="pb-16" id="Projects">
      <div className="container lg:mt-24">
        <div className="flex justify-center">
          <p className="uppercase font-semibold md:text-xl tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text lg:text-3xl">
            Featured Projects
          </p>
        </div>
        <div className="md:w-80 md:mx-auto">
          <p className="text-center text-white/60 mt-4 lg:text-lg lg:mt-8">
            See How I transformed concepts into engaing digital something change
            later.
          </p>
        </div>

        <div className="flex flex-col mt-10 gap-16 lg:mt-16">
          {portfolioProjects.map((project , index) => {
            return (
              <div
                key={project.title}
                className=" bg-gray-800 rounded-3xl z-0 overflow-hidden 
                after:content-[''] after:z-10 after:pointer-events-none
                after:absolute after:inset-0 after:outline 
                after:outline-2 after:-outline-offset-2 after:rounded-3xl
                after:outline-white/20 px-8 pt-8 md:px-9 md:pt-9 lg:pt-16 lg:px-16 sticky"
                style={{top:`calc(64px + ${index*40}px )`}} >
                <div
                  className=" absolute opacity-5 -z-10 inset-0"
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                ></div>

                <div className="lg:grid lg:gap-16 lg:grid-cols-2 ">
                  <div className="lg:pb-16">
                    <div
                      className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text 
                  inline-flex font-bold uppercase tracking-widest text-sm
                  "
                    >
                      <span>{project.languages}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex items-center gap-2 text-sm text-white/40"
                        >
                          <CheckIcon className="size-6 flex-shrink-0" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.link}
                      className="p-3 gap-2 bg-white text-black font-bold flex justify-center mt-8 rounded-xl items-center md:inline-flex md:py-3 md:px-4 "
                    >
                      <button>View GitHub</button>
                      <ArrowIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <Image
                  className="mt-8 -mb-6 lg:mb-0 lg:absolute lg:h-full"
                  src={project.image}
                  alt={project.title}
                />
                  </div>
                </div>

                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
