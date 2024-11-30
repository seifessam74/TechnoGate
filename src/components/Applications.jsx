import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation

const FeaturedApps = () => {
  const apps = [
    {
      icon: "chart-bar",
      name: "First",
      description:
        "نظام مالى ومحاسبى عربى - يدعم الحوسبة السحابية بشكل كامل للمنشآت المتوسطة و الكبيرة - القيمة الأفضل للأعمال فى المنطقة العربية",
    },
    {
      icon: "pie-chart",
      name: "Alpha",
      description:
        "نظام إدارة المبيعات و عمليات العملاء العربى - يدعم زيادة المبيعات و يؤدى خدمة أفضل لعملائك من خلال الحوسبة السحابية - مصمم لخدمة عملائك بشكل أفضل",
    },
    {
      icon: "plane",
      name: "Quadro",
      description:
        "نظام الحسابات و التشغيل لشركات السياحة - يمثل منتجك السياحى بنجاح لسوق السياحة من خلال الإنترنت - مع إدارة كاملة للحجوزات و الحسابات والتشغيل",
    },
    {
      icon: "users",
      name: "Epic",
      description:
        "نظام إدارة الموارد البشرية المتكامل - يدعم جميع عمليات شؤون الموظفين والرواتب والحضور والانصراف - حل متكامل لإدارة القوى العاملة",
    },
  ];

  // Animation Variants for the Cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    }),
  };

  // Hover Effect Variants
  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)", // Reduced box shadow for less performance impact
    transition: { duration: 0.2 },
  };

  return (
    /* #1a1a2e */
    <div className="relative w-full py-32 bg-[linear-gradient(to_left,_#1D3D6D,_#0F4C75)]">
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="w-full h-full opacity-10"
        >
          <g>
            <circle
              cx="100"
              cy="100"
              r="300"
              fill="none"
              stroke="#4a90e2"
              strokeWidth="2"
            />
            <circle
              cx="900"
              cy="900"
              r="200"
              fill="none"
              stroke="#4a90e2"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="0"
              x2="1000"
              y2="1000"
              stroke="#6b7280"
              strokeWidth="1"
            />
            <line
              x1="200"
              y1="0"
              x2="1000"
              y2="800"
              stroke="#6b7280"
              strokeWidth="1"
            />
            <line
              x1="400"
              y1="0"
              x2="1000"
              y2="600"
              stroke="#6b7280"
              strokeWidth="1"
            />
            <path
              d="M500,200 L700,400 L500,600 L300,400 Z"
              fill="none"
              stroke="#4a90e2"
              strokeWidth="2"
            />
            <path
              d="M800,100 L900,200 L800,300 L700,200 Z"
              fill="none"
              stroke="#4a90e2"
              strokeWidth="2"
            />
            <circle cx="200" cy="200" r="3" fill="#6b7280" />
            <circle cx="400" cy="400" r="3" fill="#6b7280" />
            <circle cx="600" cy="600" r="3" fill="#6b7280" />
            <circle cx="800" cy="800" r="3" fill="#6b7280" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-10 text-gray-200">
            تطبيقاتنا المميزة
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ direction: "rtl" }}
          >
            الرجاء الإطلاع على نبذة صغيرة لكى تجد ما تبحث عنه.
            <br />
            ثم لا تتردد فى الإتصال بنا!
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 text-center transform transition-all duration-300 hover:bg-blue-primary hover:text-white group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={hoverEffect}
              variants={cardVariants}
              style={{ willChange: "transform, opacity" }} // Hints the browser to optimize rendering
            >
              {/* Icon */}
              <div className="mb-4">
                {app.icon === "chart-bar" && (
                  <svg
                    className="w-12 h-12 mx-auto text-red-500 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                )}
                {app.icon === "pie-chart" && (
                  <svg
                    className="w-12 h-12 mx-auto text-red-500 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                )}
                {app.icon === "plane" && (
                  <svg
                    className="w-12 h-12 mx-auto text-red-500 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
                {app.icon === "users" && (
                  <svg
                    className="w-12 h-12 mx-auto text-red-500 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </div>

              {/* App Name */}
              <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-white transition-colors duration-300">
                {app.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {app.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedApps;
