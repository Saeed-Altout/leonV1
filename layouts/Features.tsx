import { DataCardFeatures } from "../data/Data";
const Features = () => {
  return (
    <section className="bg-gray-50" id="features">
      <div className="container px-8 mx-auto md:px-10 lg:px-16 xl:px-32">
        <div className="text-center">
          <h2 className="font-black text-primary text-7xl">Features</h2>
          <p className="text-base leading-8 text-gray-700">
            Lorem ipsum dolor sit
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {DataCardFeatures.map((card, key) => (
            <div
              key={key}
              className="p-5 text-center duration-200 ease-linear bg-white shadow-md"
            >
              <span className="block mx-auto text-4xl w-fit text-primary">
                {card.icon}
              </span>
              <div className="mt-5">
                <h3 className="mb-3 text-xl ">{card.title}</h3>
                <p className="text-base leading-8 text-gray-700">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
