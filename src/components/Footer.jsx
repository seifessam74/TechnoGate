import React from "react";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="block relative bg-gray-50 w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Form - Full width on mobile */}
          <div className="md:col-span-4 order-4 md:order-1">
            <form action="/Home/Contact" method="post" className="space-y-2">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="الاسم الكامل"
                  className="w-full p-2 border rounded-md bg-white text-right text-black placeholder-gray-400 text-sm focus:border-red-800 focus:ring-0 outline-none"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="البريد الالكتروني"
                  className="w-full p-2 border rounded-md bg-white text-right text-black placeholder-gray-400 text-sm focus:border-red-800 focus:ring-0 outline-none"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="الرسالة"
                  rows="5"
                  className="w-full p-2 border rounded-md bg-white text-right text-black placeholder-gray-400 text-sm focus:border-red-800 focus:ring-0 outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#980000] border-[#980000] border-1 text-white text-[12px] font-semibold uppercase leading-[14px] tracking-[0.5px] px-[18px] py-[12px] rounded-[5px] hover:bg-red-900 transition-all duration-300 focus:outline-none mb-[6px] cursor-pointer flex items-center gap-2 ml-auto"
              >
                <FaPaperPlane size={18} />
                <span className="font-[tajawal-regular]">أرسال</span>
              </button>
            </form>
          </div>

          {/* About Section */}
          <div
            className="md:col-span-4 text-right order-1 md:order-4"
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL
              }images/world-map.png)`,
              backgroundPosition: "50% 20px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-xl font-bold mb-4 text-black">عن تكنوجت</h3>
            <div className="space-y-2 text-gray-600">
              <p
                className="flex items-center justify-end gap-2 text-[16px] leading-[32px] font-normal"
                style={{ fontFamily: "Tajawal, sans-serif" }}
              >
                <span className="text-right" style={{ direction: "rtl" }}>
                  5 كومباوند المتحدة - محور جمال عبد الناصر - 6 اكتوبر
                </span>

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
              <p
                className="flex items-center justify-end gap-2 text-[16px] leading-[32px] font-normal"
                style={{ fontFamily: "Tajawal, sans-serif" }}
              >
                <span>01090557558</span>
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
              <p
                className="flex items-center justify-end gap-2 text-[16px] leading-[32px] font-normal"
                style={{ fontFamily: "Tajawal, sans-serif" }}
              >
                <span>info@Technogate.com</span>
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
              <p
                className="flex items-center justify-end gap-2 text-[16px] leading-[32px] font-normal"
                style={{ fontFamily: "Tajawal, sans-serif" }}
              >
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
              <p
                className="flex items-center justify-end gap-2 text-[16px] leading-[32px] font-normal"
                style={{ fontFamily: "Tajawal, sans-serif" }}
              >
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

          {/* Links Sections */}
          <div className="md:col-span-2 order-2 md:order-3">
            <ul className="space-y-2 text-gray-600 text-right">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[16px] leading-[32px] font-normal"
                  style={{ fontFamily: "Tajawal, sans-serif" }}
                >
                  طلب موقع الكتروني
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[16px] leading-[32px] font-normal"
                  style={{ fontFamily: "Tajawal, sans-serif" }}
                >
                  سابقة الاعمال
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[16px] leading-[32px] font-normal"
                  style={{ fontFamily: "Tajawal, sans-serif" }}
                >
                  تطبيقات الويب
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[16px] leading-[32px] font-normal"
                  style={{ fontFamily: "Tajawal, sans-serif" }}
                >
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
            <img
              src={`${import.meta.env.BASE_URL}images/payment-methods.png`}
              alt="Payment Methods"
              className="mt-8 mx-auto max-w-full h-auto"
            />
          </div>

          {/* Additional Links Sections */}

          <div className="md:col-span-2 order-3 md:order-2 flex flex-col items-end">
            <ul className="space-y-2 text-gray-600 text-right">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[16px] leading-[32px] font-normal"
                  style={{ fontFamily: "Tajawal, sans-serif" }}
                >
                  أتصل بنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[16px] leading-[32px] font-normal"
                  style={{ fontFamily: "Tajawal, sans-serif" }}
                >
                  عنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[16px] leading-[32px] font-normal"
                  style={{ fontFamily: "Tajawal, sans-serif" }}
                >
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 order-last md:order-first justify-center w-full md:w-auto mb-4 md:mb-0">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://wa.me/01090557558"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp size={18} className="text-white" />
              </a>
            </div>
            <div
              className="text-gray-600 text-center md:text-right w-full md:w-auto order-first md:order-last text-[16px] leading-[32px] font-normal"
              style={{ fontFamily: "Tajawal, sans-serif" }}
            >
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
