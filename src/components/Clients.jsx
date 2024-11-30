import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle";

const ClientLogos = () => {
  const logos = [
    { id: 1, src: `${import.meta.env.BASE_URL}images/A.jpg`, alt: "عميل A" },
    { id: 2, src: `${import.meta.env.BASE_URL}images/B.jpeg`, alt: "عميل B" },
    { id: 3, src: `${import.meta.env.BASE_URL}images/C.jpg`, alt: "عميل C" },
    { id: 4, src: `${import.meta.env.BASE_URL}images/D.jpg`, alt: "عميل D" },
    { id: 5, src: `${import.meta.env.BASE_URL}images/E.png`, alt: "عميل E" },
    { id: 6, src: `${import.meta.env.BASE_URL}images/F.png`, alt: "عميل F" },
    { id: 7, src: `${import.meta.env.BASE_URL}images/G.png`, alt: "عميل G" },
    { id: 8, src: `${import.meta.env.BASE_URL}images/H.png`, alt: "عميل H" },
    { id: 9, src: `${import.meta.env.BASE_URL}images/I.png`, alt: "عميل I" },
    { id: 10, src: `${import.meta.env.BASE_URL}images/J.png`, alt: "عميل J" },
    { id: 11, src: `${import.meta.env.BASE_URL}images/K.png`, alt: "عميل K" },
    { id: 12, src: `${import.meta.env.BASE_URL}images/L.jpeg`, alt: "عميل L" },
    { id: 13, src: `${import.meta.env.BASE_URL}images/M.png`, alt: "عميل M" },
    { id: 14, src: `${import.meta.env.BASE_URL}images/N.jpg`, alt: "عميل N" },
    { id: 15, src: `${import.meta.env.BASE_URL}images/O.png`, alt: "عميل O" },
    { id: 16, src: `${import.meta.env.BASE_URL}images/P.jpg`, alt: "عميل P" },
    { id: 17, src: `${import.meta.env.BASE_URL}images/Q.jpg`, alt: "عميل Q" },
    { id: 18, src: `${import.meta.env.BASE_URL}images/R.jpg`, alt: "عميل R" },
    { id: 19, src: `${import.meta.env.BASE_URL}images/S.jpg`, alt: "عميل S" },
    { id: 20, src: `${import.meta.env.BASE_URL}images/T.png`, alt: "عميل T" },
    { id: 21, src: `${import.meta.env.BASE_URL}images/U.png`, alt: "عميل U" },
    { id: 22, src: `${import.meta.env.BASE_URL}images/V.png`, alt: "عميل V" },
    { id: 23, src: `${import.meta.env.BASE_URL}images/W.jpeg`, alt: "عميل W" },
    { id: 24, src: `${import.meta.env.BASE_URL}images/X.png`, alt: "عميل X" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="sm:mx-20 mx-4 mb-12">
        <div className="flex items-center gap-4 justify-end">
          <h2 className="text-3xl font-bold text-blue-primary py-4">
            شركاء النجاح
          </h2>
          <div className="w-1 h-8 bg-blue-primary"></div>
        </div>
      </div>

      <div className="sm:mx-20 mx-4">
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="client-logos-slider"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="aspect-[3/2] w-full max-w-[200px] mx-auto flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105">
                <div className="relative w-full h-full max-h-[120px]">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                  />
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

        .font-cairo {
          font-family: "Cairo", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
