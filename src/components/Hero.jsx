import React, { useState, useRef, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

const Overlay = () => {
  return (
    <motion.div
      className="absolute top-0 left-[1.3%] w-[150px] bg-[#0a2342] bg-opacity-60"
      initial={{
        height: 0,
        rotate: 17,
        scale: 1.5,
      }}
      animate={{
        height: "100%",
        rotate: 17,
        scale: 1.5,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.4,
      }}
    />
  );
};

const slides = [
  {
    image: `${import.meta.env.BASE_URL}images/one.png`,
    title: "نحو حلول برمجية متكاملة",
    subtitle: "تحقق أهدافك",
  },
  {
    image: `${import.meta.env.BASE_URL}images/three.png`,
    title: "استراتيجيات مبتكرة",
    subtitle: "لتحويل رؤيتك إلى واقع",
  },
  {
    image: `${import.meta.env.BASE_URL}images/two.png`,
    title: "إدارة سلسة و احترافية لأعمالك",
    subtitle: "مع حلول ERP المتقدمة من تكنوجيت",
  },
  {
    image: `${import.meta.env.BASE_URL}images/four.png`,
    title: "تكنولوجيا أوراكل",
    subtitle: "هي الأساس لمنتجات برمجية مستدامة وفعالة",
  },
  {
    image: `${import.meta.env.BASE_URL}images/five.png`,
    title: "التزامنا بالجودة",
    subtitle: "يضمن أداءً سلساً وموثوقية طويلة الأمد لمنتجاتنا",
  },
  {
    image: `${import.meta.env.BASE_URL}images/six.png`,
    title: "تكامل سلس و فعال",
    subtitle: "مع منظومة مصلحة الضرائب",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Added state for auto-play
  const startX = useRef(null);
  const currentX = useRef(null);
  const autoPlayInterval = useRef(null); // Added ref for interval

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      if (isAutoPlaying) {
        autoPlayInterval.current = setInterval(() => {
          setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          );
        }, 5000); // Change slide every 5 seconds
      }
    };

    const stopAutoPlay = () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };

    startAutoPlay();

    // Cleanup on component unmount
    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  // Pause auto-play when user interacts with slider
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-play after user interaction
  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const handleNavClick = (event, index) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentSlide(index);
    pauseAutoPlay(); // Pause when user manually navigates
    setTimeout(resumeAutoPlay, 5000); // Resume after 5 seconds of inactivity
  };

  // Mouse events for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentX.current = e.clientX;
    pauseAutoPlay(); // Pause when user starts dragging
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
    setTimeout(resumeAutoPlay, 5000); // Resume after 5 seconds of inactivity
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
    pauseAutoPlay(); // Pause when user starts touching
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
    setTimeout(resumeAutoPlay, 5000); // Resume after 5 seconds of inactivity
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
