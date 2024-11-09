import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper core and required modules
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle"; // Includes all styles, might help with missing styles

const ClientLogos = () => {
  const logos = [
    { id: 1, src: "src/assets/A.png", alt: "عميل A" },
    { id: 2, src: "src/assets/B.jpg", alt: "عميل B" },
    { id: 3, src: "src/assets/C.jpeg", alt: "عميل C" },
    { id: 4, src: "src/assets/D.jpg", alt: "عميل D" },
    { id: 5, src: "src/assets/E.jpg", alt: "عميل E" },
    { id: 6, src: "src/assets/F.jpg", alt: "عميل F" },
    { id: 7, src: "src/assets/G.png", alt: "عميل G" },
    { id: 8, src: "src/assets/H.png", alt: "عميل H" },
    { id: 9, src: "src/assets/I.jpg", alt: "عميل I" },
    { id: 10, src: "src/assets/J.jpg", alt: "عميل J" },
    { id: 11, src: "src/assets/K.jpg", alt: "عميل K" },
    { id: 12, src: "src/assets/L.jpeg", alt: "عميل L" },
    { id: 13, src: "src/assets/M.jpg", alt: "عميل M" },
    { id: 14, src: "src/assets/N.jpg", alt: "عميل N" },
    { id: 15, src: "src/assets/O.jpg", alt: "عميل O" },
    { id: 16, src: "src/assets/P.jpg", alt: "عميل P" },
    { id: 17, src: "src/assets/Q.png", alt: "عميل Q" },
    { id: 18, src: "src/assets/R.png", alt: "عميل R" },
    { id: 19, src: "src/assets/S.jpg", alt: "عميل S" },
  ];

  return (
    <section className="py-16 bg-white sm:mx-20 mx-4">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center gap-4 justify-end">
          <h2 className="text-2xl font-bold text-blue-600 font-cairo">
            شركاء النجاح
          </h2>
          <div className="w-1 h-8 bg-blue-600"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="client-logos-slider"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="logo-wrapper">
                <div className="logo-container">
                  <img src={logo.src} alt={logo.alt} className="logo-image" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap");

        .client-logos-slider .swiper-slide {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1 !important;
        }

        .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }

        .logo-wrapper {
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-container {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .logo-container:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .font-cairo {
          font-family: "Cairo", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
