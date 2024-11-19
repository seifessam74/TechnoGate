import React from "react";

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

  return (
    <div className="relative w-full py-16 bg-gray-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern.png)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />

      <div className="relative z-10 container mx-auto px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-10 text-blue-900">
            تطبيقاتنا المميزة
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
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
            <div
              key={index}
              className="bg-white shadow-lg p-6 text-center transform transition-all duration-300 hover:bg-blue-600 hover:text-white group"
            >
              {/* Icon */}
              <div className="mb-4">
                {app.icon === "chart-bar" && (
                  <svg
                    className="w-12 h-12 mx-auto text-red-500  transition-colors duration-300"
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
                    className="w-12 h-12 mx-auto text-red-500  transition-colors duration-300"
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
                    className="w-12 h-12 mx-auto text-red-500  transition-colors duration-300"
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
                    className="w-12 h-12 mx-auto text-red-500  transition-colors duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedApps;
