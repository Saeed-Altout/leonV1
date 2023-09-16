import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50" id="contact">
      <div className="container px-8 mx-auto md:px-10 lg:px-16 xl:px-32">
        <div className="text-center">
          <h2 className="font-black text-primary text-7xl">Contact</h2>
          <p className="text-base leading-8 text-gray-700">
            We are born to create
          </p>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700">
            Feel free to drop us a line at:
            <a
              href="https://saeedaltoutpro@gmail.com"
              className="block my-2 text-base tracking-wide text-primary"
            >
              saeedaltoutpro@gmail.com
            </a>
          </p>

          <div className="mt-10">
            <p className="text-xl"> Find Us On Social Networks</p>
            <div className="flex items-center justify-center gap-5 my-5">
              <span className="p-4 text-white rounded-full cursor-pointer bg-primary">
                <FaFacebookF />
              </span>
              <span className="p-4 text-white rounded-full cursor-pointer bg-primary">
                <FaInstagram />
              </span>
              <span className="p-4 text-white rounded-full cursor-pointer bg-primary">
                <FaYoutube />
              </span>
              <span className="p-4 text-white rounded-full cursor-pointer bg-primary">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
