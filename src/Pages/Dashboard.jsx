import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // 1. IMPORT LINK DI SINI
import "../styles/Dashboard.css";
import KLAP from "../assets/images/dashboard/KLAP.jpg";

function Dashboard() {
  // Animasi scale tulisan hero
  const [scrollY, setScrollY] = useState(0);
  const textScale = Math.max(1 - scrollY / 300, 0.6);

  // Fade-in animasi
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [showMoreAlbums, setShowMoreAlbums] = useState(false);

  // Data untuk semua album (tambahkan lebih banyak jika perlu)
  const allAlbums = [
    {
      id: 1,
      src: "https://placehold.co/150x150/ffc0cb/333?text=Magic+Hour",
      alt: "Album 1",
    },
    {
      id: 2,
      src: "https://placehold.co/150x150/ab81db/fff?text=Against",
      alt: "Album 2",
    },
    {
      id: 3,
      src: "https://placehold.co/150x150/a0e9ff/333?text=Tipi+Tap",
      alt: "Album 3",
    },
    {
      id: 4,
      src: "https://placehold.co/150x150/f9a825/fff?text=First+Impact",
      alt: "Album 4",
    },
    {
      id: 5,
      src: "https://placehold.co/150x150/7cb342/fff?text=Doublast",
      alt: "Album 5",
    },
    {
      id: 6,
      src: "https://placehold.co/150x150/d81b60/fff?text=Troubleshooter",
      alt: "Album 6",
    },
  ];

  // Tentukan album yang akan ditampilkan berdasarkan state
  const displayedAlbums = showMoreAlbums ? allAlbums : allAlbums.slice(0, 3);

  return (
    <div className="dashboard-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div
          className="hero-text"
          style={{
            transform: `scale(${textScale})`,
            transformOrigin: "center top",
          }}
        >
          <h1 className="jomhuria annyeong">ANNYEONG!!</h1>
          <h1 className="jomhuria keplian highlight">KEPLIAN</h1>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="main-content-wrapper">
        {/* BUBBLE GUM SECTION (No Card) */}
        <section className="bubble-gum-section">
          {/* PASTIKAN 'to' DI SINI ADALAH "/new-albums" */}
          <Link to="/new-albums">
            <img src={KLAP} alt="Bubble Gum" className="card-img" />
          </Link>
          <h2 className="card-title">Comeback album “Bubble Gum” - Out now</h2>
        </section>

        {/* Garis Pemisah Interaktif */}
        <div className="interactive-separator"></div>

        {/* KEP1ER INFO SECTION (No Card) */}
        <section className={`info-section ${isVisible ? "fade-in" : ""}`}>
          <h3>Kep1er</h3>
          <p className="catchphrase">“Catch Your Eye, Catch Your Mind”</p>
          <p className="description">
            Kep1er (Korea: 케플러) adalah girlband multinational yang dibentuk
            melalui acara survival Mnet Girls Planet 999. Mereka debut pada 3
            Januari 2022 dengan mini album pertama, First Impact.
          </p>
        </section>

        {/* Garis Pemisah Interaktif */}
        <div className="interactive-separator"></div>

        {/* ALBUM SECTION */}
        <section className="list-section">
          <div className="list-header">
            <h4>Album</h4>
            {/* Link "More" dihapus dari sini */}
          </div>
          <div className="card-list">
            {displayedAlbums.map((album) => (
              <div className="item-card" key={album.id}>
                <img src={album.src} alt={album.alt} />
              </div>
            ))}
          </div>
          {/* Tombol "More" dipindahkan ke bawah list */}
          {!showMoreAlbums && (
            <div className="more-link-wrapper">
              <button
                onClick={() => setShowMoreAlbums(true)}
                className="more-link-button"
              >
                More
              </button>
            </div>
          )}
        </section>

        {/* Garis Pemisah Interaktif */}
        <div className="interactive-separator"></div>

        {/* UPCOMING SCHEDULE SECTION */}
        <section className="list-section">
          <div className="list-header">
            <h4>Upcoming Schedule</h4>
          </div>
          <div className="card-list">
            <div className="item-card schedule">
              <img
                src="https://placehold.co/150x200/ffc0cb/333?text=Fan+Event"
                alt="Schedule 1"
              />
            </div>
            <div className="item-card schedule">
              <img
                src="https://placehold.co/150x200/ab81db/fff?text=IDOL+RADIO"
                alt="Schedule 2"
              />
            </div>
            <div className="item-card schedule">
              <img
                src="https://placehold.co/150x200/ff7f50/fff?text=KCON"
                alt="Schedule 3"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
