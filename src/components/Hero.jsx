import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

const Overlay = () => {
  return (
    <motion.div
      className="absolute top-0 left-[1.3%] w-[150px] bg-[#0a2342] bg-opacity-60"
      initial={{
        height: 0, // Start with 0 height
        rotate: 17, // Start with 17 degrees rotation
        scale: 1.5, // Start with 1.5 scale
      }}
      animate={{
        height: "100%", // Grow to full height
        rotate: 17, // Maintain 17 degrees rotation
        scale: 1.5, // Maintain 1.5 scale
      }}
      exit={{
        opacity: 0, // Fade out to 0 opacity
        transition: {
          duration: 0.5, // Fade out duration
          ease: "easeOut", // Smooth fade out
        },
      }}
      transition={{
        duration: 1, // Duration of the animation
        ease: "easeInOut", // Smooth easing
        delay: 0.4, // Delay before starting
      }}
    />
  );
};
const slides = [
  {
    image: "/images/one.png",
    title: "نحو حلول برمجية متكاملة",
    subtitle: "تحقق أهدافك",
  },
  {
    image: "/images/three.png",
    title: "استراتيجيات مبتكرة",
    subtitle: "لتحويل رؤيتك إلى واقع",
  },
  {
    image: "/images/two.png",
    title: "إدارة سلسة و احترافية لأعمالك",
    subtitle: "مع حلول ERP المتقدمة من تكنوجيت",
  },
  {
    image: "/images/four.png",
    title: "تكنولوجيا أوراكل",
    subtitle: "هي الأساس لمنتجات برمجية مستدامة وفعالة",
  },
  {
    image: "/images/five.png",
    title: "التزامنا بالجودة",
    subtitle: "يضمن أداءً سلساً وموثوقية طويلة الأمد لمنتجاتنا",
  },
  {
    image: "/images/six.png",
    title: "تكامل سلس و فعال",
    subtitle: "مع منظومة مصلحة الضرائب",
  },
];

const Hero = () => {
  <Overlay />;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(null);
  const currentX = useRef(null);

  const handleNavClick = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentSlide(index);
  };

  // Mouse events for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const diff = startX.current - currentX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    }

    setIsDragging(false);
    startX.current = null;
    currentX.current = null;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!startX.current || !currentX.current) return;

    const diff = startX.current - currentX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    }

    startX.current = null;
    currentX.current = null;
  };

  const titleVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-overlay">
        <Overlay />
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.h1
              className="hero-heading"
              key={`title-${currentSlide}`}
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              className="hero-subheading"
              key={`subtitle-${currentSlide}`}
              variants={subtitleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div
        className="side-navigation"
        role="navigation"
        onClick={(e) => e.stopPropagation()}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-circle ${index === currentSlide ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          >
            <svg
              className={`progress ${index === currentSlide ? "filling" : ""}`}
              width="41"
              height="41"
            >
              <circle className="circle-origin" r="20" cx="20.5" cy="20.5" />
            </svg>

            <span>{index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export { Hero, Overlay };
