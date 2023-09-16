import Image from "next/image";
import { DataAbout } from "../data/Data";
const About = () => {
  return (
    <section className="bg-white" id="about">
      <div className="container px-8 mx-auto md:px-10 lg:px-16 xl:px-32">
        <div className="text-center">
          <h2 className="font-black text-primary text-7xl">About</h2>
          <p className="text-base leading-8 text-gray-700">
            Don't be busy, be productive
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DataAbout.map((item, key) => (
            <div key={key} className="p-10 text-center bg-white shadow-md">
              <Image
                className="object-cover w-16 h-16 mx-auto mb-5 rounded-full"
                src={item.src}
                alt="About"
              />
              <p className="text-base leading-8 text-gray-700">
                <span className="text-xl">'' </span>
                {item.description}
                <span className="text-xl"> ''</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
