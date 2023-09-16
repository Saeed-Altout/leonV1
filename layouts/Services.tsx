import { DataCardServices } from "../data/Data";
const Services = () => {
  return (
    <section className="bg-white" id="services">
      <div className="container px-8 mx-auto md:px-10 lg:px-16 xl:px-32">
        <div className="text-center">
          <h2 className="font-black text-primary text-7xl">Services</h2>
          <p className="text-base leading-8 text-gray-700">
            Don't be busy, be productive
          </p>
        </div>

        <div className="grid grid-flow-row grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DataCardServices.map((service, key) => (
            <div key={key} className="flex items-start justify-between gap-4">
              <span className="block mx-auto text-4xl w-fit text-primary">
                {service.icon}
              </span>
              <div>
                <h3 className="text-xl">{service.title}</h3>
                <p className="text-base leading-8 text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
