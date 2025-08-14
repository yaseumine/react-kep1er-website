import React from "react";
import "../styles/Gallery.css";
import h1 from "../assets/images/Gallery/h1.jpg";
import h4 from "../assets/images/Gallery/h4.jpg";
import h7 from "../assets/images/Gallery/h7.jpg";
import h8 from "../assets/images/Gallery/h8.jpg";
import h12 from "../assets/images/Gallery/h12.jpg";
import h13 from "../assets/images/Gallery/h13.jpg";
import h15 from "../assets/images/Gallery/h15.jpg";
import h2 from "../assets/images/Gallery/h2.jpg";
import h6 from "../assets/images/Gallery/h6.jpg";
import h5 from "../assets/images/Gallery/h5.jpg";
import h16 from "../assets/images/Gallery/h16.jpg";
import h17 from "../assets/images/Gallery/h17.jpg";

// Kita akan buat file CSS ini selanjutnya

// --- DATA UNTUK GALERI ---
// Anda bisa dengan mudah menambah/mengubah gambar di sini.
// Saya menggunakan placehold.co dengan tinggi yang berbeda-beda untuk meniru efek Pinterest.
const galleryImages = [
  {
    id: 1,
    src: h1,
    title: "Momen Panggung Spektakuler",
  },
  {
    id: 2,
    src: h4,
    title: 'Sesi Foto Konsep "Cute"',
  },
  {
    id: 3,
    src: h8,
    title: "Di Balik Layar Video Klip",
  },
  {
    id: 4,
    src: h7,
    title: "Selfie Belakang Stage",
  },
  {
    id: 5,
    src: h12,
    title: "Latihan Koreografi Intens",
  },
  {
    id: 6,
    src: h13,
    title: "Wajah Ceria Saat Istirahat",
  },
  {
    id: 7,
    src: h15,
    title: "Piala Penghargaan",
  },
  {
    id: 8,
    src: h2,
    title: "Grid Foto",
  },
  {
    id: 9,
    src: h6,
    title: "Keakraban Antar Anggota",
  },
  {
    id: 10,
    src: h5,
    title: "Gaya Swag",
  },
  {
    id: 11,
    src: h16,
    title: "Fansign Moment",
  },
  {
    id: 12,
    src: h17,
    title: "Perjalanan Tur Dunia",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1>Gallery</h1>
        <p>our moments, forever.</p>
      </header>

      <main className="masonry-layout">
        {galleryImages.map((image) => (
          <div className="gallery-card" key={image.id}>
            <img src={image.src} alt={image.title} />
            <div className="card-overlay">
              <div className="card-title">{image.title}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Gallery;
