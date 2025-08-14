import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import Members from "../components/Members";

function Dashboard() {
  const [scrollY, setScrollY] = useState(0);
  const scrollTarget = useRef(0);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll update
  useEffect(() => {
    let animationFrame;

    const handleScroll = () => {
      scrollTarget.current = window.scrollY;
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(smoothUpdate);
      }
    };

    const smoothUpdate = () => {
      setScrollY((prev) => {
        const diff = scrollTarget.current - prev;
        const eased = prev + diff * 0.1;
        if (Math.abs(diff) < 0.1) {
          animationFrame = null;
          return scrollTarget.current;
        }
        animationFrame = requestAnimationFrame(smoothUpdate);
        return eased;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scale values
  const textScale = Math.max(1 - scrollY / 300, 0.6);
  const images = ["/img/banner1.jpg", "/img/banner2.jpg", "/img/banner3.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide tiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="dashboard">
        {/* HERO SECTION */}
        <section className="hero">
          {/* Efek scale dipindahkan ke sini */}
          <div
            className="hero-text"
            style={{
              transform: `scale(${textScale})`,
              transformOrigin: "center top",
            }}
          >
            <h1 className="jomhuria">ANNYEONG!!</h1>
            <h1 className="highlight jomhuria">
              <span className="relative-text">
                <img src="img/Vector-2.svg" alt="icon" className="vector top" />
                <img
                  src="img/Vector-1.svg"
                  alt="icon"
                  className="vector middle"
                />
                <img
                  src="img/Vector-3.svg"
                  alt="icon"
                  className="vector bottom"
                />
                KEPLIAN
                <img
                  src="img/Vector-4.svg"
                  alt="icon"
                  className="vector top-right"
                />
              </span>
            </h1>
          </div>
        </section>

        {/* BANNER */}
        <section className="banner">
          <div
            className="banner-slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div className="slide" key={index}>
                <img src={src} alt={`Banner ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </section>

        {/* CONTENT */}
        <section
          ref={contentRef}
          className={`content ${isVisible ? "fade-in" : "fade-hidden"}`}
        >
          <h2>Biografi Singkat</h2>
          <p>
            Kep1er (Korea: 케플러, Jepang: ケプラー; dibaca sebagai) adalah
            girlband multinational beranggotakan Tujuh orang yang akan debut di
            bawah agensi WAKEONE. Grup ini dibentuk melalui reality show
            survival Mnet Girls Planet 999, mereka debut pada 3 Januari 2022
            dengan mini album pertama mereka, First Impact.Nama grup mereka
            merupakan kombinasi dari 'Kep', yang berarti menggapai mimpi, dan
            nomor 1, yang berarti sembilan gadis bersama menjadi satu untuk
            menjadi yang terbaik. Dan juga merupakan referensi dari sebuah
            planet 'Kepler' dan juga terinspirasi oleh astronom Jerman, Johannes
            Kepler.
          </p>
        </section>
        {/* ===== GARIS PEMISAH INTERAKTIF DITAMBAHKAN DI SINI ===== */}
        <div className="interactive-separator-wrapper">
          <div className="interactive-separator"></div>
        </div>
        {/* ======================================================== */}
      </div>
      <Members />
    </>
  );
}

export default Dashboard;
