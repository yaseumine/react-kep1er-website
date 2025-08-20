import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import semua komponen halaman
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import History from "./components/History";
import Gallery from "./components/Gallery";
import Members from "./components/Members";
import Footer from "./components/Footer";
import NewAlbum from "./Pages/New-album";
import Shop from "./Pages/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />

          {/* PERBAIKAN 1: Gunakan huruf kecil untuk path */}
          <Route path="/members" element={<Members />} />

          <Route path="/gallery" element={<Gallery />} />

          {/* PERBAIKAN 2: Samakan path dengan link (plural) */}
          <Route path="/new-albums" element={<NewAlbum />} />

          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
