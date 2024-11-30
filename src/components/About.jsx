import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Users, Rocket, Globe } from "lucide-react";

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTransform = (base, speed) => {
    return `translate3d(0px, ${base + scrollY * speed}px, 0px)`;
  };

  const stats = [
    { icon: <Code2 size={24} />, value: "500+", label: "مشروع تم تسليمه" },
    { icon: <Users size={24} />, value: "50+", label: "عدد الأعضاء" },
    { icon: <Globe size={24} />, value: "5+", label: "دولة تم خدمتها" },
    { icon: <Rocket size={24} />, value: "98%", label: "رضا العملاء" },
  ];

  return (
    <div className=" py-12 sm:py-24" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-4 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-20 relative">
          {/* Images Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[380px] md:h-[440px] mb-4 sm:mb-24 lg:mb-0 order-2 lg:order-none">
            {/* First Image */}
            <div
              className="absolute top-[-20px] sm:top-[-30px] left-0 w-4/5 aboutImg-bg rounded-[15px] sm:rounded-[25px] overflow-hidden"
              style={{
                transform: calculateTransform(0, 0.1),
                transition: "transform 0.1s linear",
                willChange: "transform",
                zIndex: 1,
              }}
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src="https://www.egabi.com/storage/new-image/about-egabi-home-page.jpg"
                alt="Technology Innovation"
                data-scroll="data-scroll"
                data-scroll-speed=".1"
              />
            </div>

            {/* Second Image */}
            <div
              className="absolute bottom-[-40px] sm:bottom-[-65px] right-0 w-2/4 aboutImg-sm rounded-[15px] sm:rounded-[25px] overflow-hidden"
              style={{
                transform: calculateTransform(0, -0.1),
                transition: "transform 0.1s linear",
                willChange: "transform",
                zIndex: 2,
              }}
            >
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src="https://www.egabi.com/storage/new-image/untitled-design.jpg"
                alt="Digital Transformation"
                data-scroll="data-scroll"
                data-scroll-speed="-.1"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2 sm:space-y-4 text-right"
            >
              {/* Title with Vertical Line */}
              <div className="flex items-center space-x-4 mb-2 sm:mb-4">
                <div className="h-8 sm:h-12 w-1 bg-blue-primary ml-3 sm:ml-5"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-primary">
                  عن تكنوجت
                </h2>
              </div>

              <div className="text-black text-base sm:text-lg leading-relaxed mb-2 sm:mb-4">
                تأسست تكنوجيت لتكون وجهة متكاملة للحلول البرمجية المتقدمة، حيث
                نعمل على تطوير حلول تقنية مبتكرة تلبي احتياجات العملاء وتساعدهم
                على تحقيق أهدافهم.
              </div>

              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  نقدم خدمات تصميم وبرمجة التطبيقات، وتطوير البرمجيات المخصصة،
                  وتقديم الاستشارات التقنية، مما يمكّن الشركات من تعزيز كفاءتها
                  وتحقيق النجاح المستدام في عالم التكنولوجيا المتسارع.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  نؤمن في تكنوجيت بأهمية الجودة، والدقة، والالتزام بتقديم خدمات
                  متميزة وشراكات طويلة الأمد مع عملائنا.
                </p>
              </div>

              {/* "اعرف المزيد" Button */}
              <div className="text-right mt-2 sm:mt-4">
                <button className="bg-white text-blue-primary border border-blue-primary px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-blue-primary hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  اعرف المزيد
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Rest of the component remains unchanged */}
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-primary mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            قيمنا الأساسية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "الابتكار أولاً",
                description: "نتبنى أحدث التقنيات لحل التحديات المعقدة",
              },
              {
                title: "نجاح العملاء",
                description:
                  "نجاحك هو نجاحنا. نحن ملتزمون بتقديم حلول تفوق التوقعات",
              },
              {
                title: "جودة عالية",
                description:
                  "نحافظ على أعلى معايير الجودة في كل ما نقوم به، من البرمجة إلى التواصل",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-[linear-gradient(to_left,_#1D3D6D,_#0F4C75)] rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            هل أنت جاهز للبدء في مشروعك؟
          </h3>
          <p className="text-xl mb-8">لنبدع شيئًا رائعًا معًا</p>
          <button className="bg-white text-blue-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            تواصل معنا
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
