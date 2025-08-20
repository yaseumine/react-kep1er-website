import React from "react";
// Import ikon yang dibutuhkan
import { FaSpotify, FaApple, FaMusic } from "react-icons/fa";
import "../styles/New-album.css";

// Data untuk galeri foto (lebih mudah dikelola)
const galleryPhotos = [
  { id: 1, src: "https://placehold.co/600x460/ffc0cb/333?text=Photo+1" },
  { id: 2, src: "https://placehold.co/600x460/ab81db/fff?text=Photo+2" },
];

// Ganti data conceptPhotos dengan data link streaming
const streamingLinks = [
  { name: "Spotify", href: "#", icon: <FaSpotify />, className: "spotify" },
  { name: "Apple Music", href: "#", icon: <FaApple />, className: "apple" },
  { name: "Melon", href: "#", icon: <FaMusic />, className: "melon" },
];

function NewAlbum() {
  return (
    <div className="new-album-page">
      {/* SECTION 1: HERO ALBUM */}
      <section className="album-hero">
        <img
          className="hero-cover-art"
          alt="Bubble Gum Album Cover"
          src="https://placehold.co/490x490/ffc0cb/333?text=Bubble+Gum"
        />
        <h1 className="album-title">Bubble Gum</h1>
        <p className="album-description">
          Bubble Gum adalah mini album ketujuh dari Kep1er. Album ini dirilis
          pada 19 Agustus 2025 dengan 'Bubble Gum' sebagai lagu utama dari album
          tersebut.
        </p>
      </section>

      {/* SECTION 2: PHOTO GALLERY */}
      <section className="photo-gallery-section">
        <h2 className="section-title">Photo</h2>
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <img
              key={photo.id}
              src={photo.src}
              alt={`Gallery photo ${photo.id}`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 3: MUSIC VIDEO */}
      <section className="music-video-section">
        <h2 className="section-title">Music Video</h2>
        <div className="video-player-wrapper">
          <iframe
            // GANTI URL DI BAWAH INI
            src="https://www.youtube.com/embed/MZm4qcvbvbQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="streaming-links">
          {streamingLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`streaming-link-item ${link.className}`}
              aria-label={`Listen on ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewAlbum;
