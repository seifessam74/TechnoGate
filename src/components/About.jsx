import React from "react";
import { motion } from "framer-motion";
import { Code2, Users, Rocket, Globe } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { icon: <Code2 size={24} />, value: "500+", label: "مشروع تم تسليمه" },
    { icon: <Users size={24} />, value: "50+", label: "عدد الأعضاء" },
    { icon: <Globe size={24} />, value: "5+", label: "دولة تم خدمتها" },
    { icon: <Rocket size={24} />, value: "98%", label: "رضا العملاء" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-right"
            >
              {/* Title with Vertical Line */}
              <div className="flex items-center space-x-4">
                <div className="h-12 w-1 bg-blue-600 ml-5"></div>
                <h2 className="text-4xl font-bold text-gray-900">
                  عن
                  <span className="text-blue-600"> تكنوجت</span>
                </h2>
              </div>

              <p className="text-lg text-gray-600">
                تأسست تكنوجيت لتكون وجهة متكاملة للحلول البرمجية المتقدمة، حيث
                نعمل على تطوير حلول تقنية مبتكرة تلبي احتياجات العملاء وتساعدهم
                على تحقيق أهدافهم. نقدم خدمات تصميم وبرمجة التطبيقات، وتطوير
                البرمجيات المخصصة، وتقديم الاستشارات التقنية، مما يمكّن الشركات
                من تعزيز كفاءتها وتحقيق النجاح المستدام في عالم التكنولوجيا
                المتسارع. نؤمن في تكنوجيت بأهمية الجودة، والدقة، والالتزام
                بتقديم خدمات متميزة وشراكات طويلة الأمد مع عملائنا.
              </p>

              {/* "اعرف المزيد" Button */}
              <div className="text-right">
                <button className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  اعرف المزيد
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3"></div>
              <img
                src="/src/assets/aboutus.jpg"
                alt="فريق العمل"
                className="relative rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>

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
              <div className="text-blue-600 mb-4">{stat.icon}</div>
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
                description: " نتبنى أحدث التقنيات لحل التحديات المعقدة",
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
          className="text-center bg-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            هل أنت جاهز للبدء في مشروعك؟
          </h3>
          <p className="text-xl mb-8">لنبدع شيئًا رائعًا معًا</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            تواصل معنا
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
