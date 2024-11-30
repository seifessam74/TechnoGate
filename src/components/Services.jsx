import React from "react";
import { motion } from "framer-motion";

const ServicesGrid = () => {
  const services = [
    {
      logo: `${import.meta.env.BASE_URL}images/service1.jpg`,
      title: "Mobile App",
      description:
        "Softex System Integration | Security Business Unit aim it about providing efficient integrated ELV systems",
      buttonText: "معرفة المزيد",
    },
    {
      logo: `${import.meta.env.BASE_URL}images/service2.jpg`,
      title: "Web Development",
      description:
        "Softex One Provides you with the best Real Estate content in Egypt to find your new Home",
      buttonText: "معرفة المزيد",
    },
    {
      logo: `${import.meta.env.BASE_URL}images/service3.png`,
      title: "Custom Software",
      description:
        "Target SMS provide organizations, Companies, with access to Mobile Messaging Solutions",
      buttonText: "معرفة المزيد",
    },
    {
      logo: `${import.meta.env.BASE_URL}images/service4.png`,
      title: "ERP",
      description:
        "Webird started in January 2004, based in Cairo with the aim to be a leading web design company",
      buttonText: "معرفة المزيد",
    },
  ];

  // Animation Variants for the Cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  // Hover Effect Variants
  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-16 py-16 mb-16">
      {/* White container with large border radius */}
      {/* <div className="bg-white rounded-3xl p-8 shadow-lg pb-16 mb-16"> */}
      <h1 className="text-xl sm:text-2xl text-blue-primary text-center mb-8 font-bold py-5">
        ايضا تعرف على خدماتنا المميزة
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded shadow-md w-full"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={hoverEffect}
            variants={cardVariants}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={service.logo}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-primary" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-center text-blue-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 text-sm min-h-[60px]">
                {service.description}
              </p>
              <div className="flex justify-center py-3">
                <button className="bg-blue-primary text-white px-4 sm:px-6 py-2 text-sm hover:bg-blue-700 transition-colors">
                  {service.buttonText}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    /* </div> */
  );
};

export default ServicesGrid;
