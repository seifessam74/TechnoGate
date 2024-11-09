import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Facebook, Linkedin, Youtube, Languages } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-transparent text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <Youtube size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/01010036560"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors group"
              >
                <FaWhatsapp
                  size={18}
                  className="text-green-400 group-hover:text-green-400"
                />
                01010036560
              </a>
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Languages size={18} />
                {localStorage.getItem("language") === "ar"
                  ? "اللغة"
                  : "Language"}
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        localStorage.setItem("language", "en");
                        setIsLanguageOpen(false);
                        // Add your language change logic here
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        localStorage.setItem("language", "ar");
                        setIsLanguageOpen(false);
                        // Add your language change logic here
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      العربية
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-white/20" />
    </>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full absolute top-0 z-20">
      <TopBar />
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 bg-transparent`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-[100px] h-[80px] object-contain"
            />
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`relative ${
                  active === link.title ? "text-white" : "text-white"
                } border-2 border-transparent hover:border-white hover:bg-[rgba(0, 123, 255, 0.5)] transition duration-300 p-2 rounded-lg`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
