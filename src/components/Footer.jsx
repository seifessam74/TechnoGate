import React from "react";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4 md:px-8 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form - moved to the top */}
          <div className="text-right">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full p-2 border rounded-md bg-white text-right text-black placeholder-gray-400 focus:border-red-800 focus:ring-0 outline-none"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-2 border rounded-md bg-white text-right text-black placeholder-gray-400 focus:border-red-800 focus:ring-0 outline-none"
              />
              <textarea
                placeholder="الرسالة"
                className="w-full p-2 border rounded-md bg-white text-right text-black placeholder-gray-400 focus:border-red-800 focus:ring-0 outline-none"
                rows={4}
              />
              <button className="bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-900 transition-colors">
                إرسال
              </button>
            </form>
          </div>

          {/* Links Section - moved to the middle */}
          <div className="text-right">
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  طلب موقع
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  معرض الأعمال
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  تطبيقات الويب
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* About Section - moved to the bottom */}
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 text-black">عن تكنوجت</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center justify-end gap-2">
                <span>٢٤ شارع طيران - مدينة نصر - القاهرة</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </p>
              <p className="flex items-center justify-end gap-2">
                <span>٠٠٢٠١٠٠١٩٠٦٤٤٤</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </p>
              <p className="flex items-center justify-end gap-2">
                <span>info@mazeedit.com</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </p>
              <p className="flex items-center justify-end gap-2">
                <span>
                  الاحد - الخميس:{" "}
                  <strong className="text-black">٩ صباحاً - ٥ مساءً</strong>
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </p>
              <p className="flex items-center justify-end gap-2">
                <span>
                  الجمعة والسبت: <strong className="text-black">مغلق</strong>
                </span>

                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 order-last md:order-first">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://wa.me/01010036560"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp size={24} className="text-white" />
              </a>
            </div>
            <div className="text-gray-600 text-right order-first md:order-last">
              ٢٠٢٤ جميع الحقوق محفوظة{" "}
              <span className="text-red-800">تكنوجت</span> ©
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
