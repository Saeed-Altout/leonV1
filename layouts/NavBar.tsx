import { useCallback, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { DataLinks } from "../data/Data";
import Link from "next/link";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="/"
      className={`${
        scrolled ? "py-10" : "py-7"
      } fixed  bg-white w-full z-[1000] shadow-md duration-300 ease-linear`}
    >
      <div className="container relative flex items-center justify-between px-8 mx-auto md:px-10 lg:px-16 xl:px-32">
        <img
          className="object-contain w-16 cursor-pointer"
          src="logo.png"
          alt="Logo Website"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />

        <button
          onClick={() => setActiveMenu((prev) => !prev)}
          className="block text-3xl cursor-pointer text-primary md:hidden"
        >
          {activeMenu ? <FiX /> : <FiMenu />}
        </button>

        <ul className="items-center justify-between hidden gap-10 md:flex">
          {DataLinks.map((link, key) => (
            <li key={key}>
              <Link
                className="text-base tracking-wide duration-300 ease-linear hover:text-primary"
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {activeMenu && (
          <ul className="absolute left-0 right-0 flex flex-col items-center justify-between w-full gap-10 py-10 bg-white shadow-xl top-14 md:hidden">
            {DataLinks.map((link, key) => (
              <li key={key}>
                <Link
                  className="text-base tracking-wide duration-300 ease-linear hover:text-primary"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
