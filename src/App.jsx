import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// 1. Import semua komponen halaman ASLI Anda
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard"; // Asumsi file ini ada
import History from "./components/History";
import Gallery from "./components/Gallery";
import Members from "./components/Members"; // Ini komponen galeri Pinterest Anda

// Komponen placeholder untuk halaman yang belum dibuat (jika perlu)

// 2. HAPUS 'const GalleryPage = ...' DARI SINI. Kita tidak membutuhkannya lagi.

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Rute untuk halaman utama dan Dashboard */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Rute untuk halaman History */}
          <Route path="/history" element={<History />} />

          {/* Rute untuk halaman Profile (masih menggunakan placeholder) */}
          <Route path="/Members" element={<Members />} />

          {/* 3. PERBAIKAN UTAMA DI SINI */}
          {/* Sekarang rute ini memanggil komponen <Gallery /> yang asli */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
