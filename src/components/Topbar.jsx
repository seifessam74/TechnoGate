import React, { useState } from "react";
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
