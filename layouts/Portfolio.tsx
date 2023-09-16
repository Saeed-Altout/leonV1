import Image from "next/image";
import { DataCradPortfolio } from "../data/Data";
const Portfolio = () => {
  return (
    <section className="bg-gray-50" id="portfolio">
      <div className="container px-8 mx-auto md:px-10 lg:px-16 xl:px-32">
        <div className="text-center">
          <h2 className="font-black text-primary text-7xl">Portfolio</h2>
          <p className="text-base leading-8 text-gray-700">
            If you do right, it will last forever
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {DataCradPortfolio.map((project, key) => (
            <div
              key={key}
              className="duration-300 ease-in-out bg-white shadow-md hover:scale-105"
            >
              <Image
                className="object-cover w-full"
                src={project.src}
                alt={project.alt}
              />
              <div className="p-5">
                <h3 className="mb-1 text-xl">{project.title}</h3>
                <p className="text-base leading-8 text-gray-700">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
