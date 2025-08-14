import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo juga kita jadikan Link ke halaman utama ("/") */}
        <Link to="/">
          <img className="navbar-logo" src="img/rectangle-1.png" alt="Logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            {/* Ganti <a> menjadi <Link> */}
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            {/* Ganti <a> menjadi <Link> */}
            <Link to="/Members">Profile</Link>
          </li>
          <li>
            {/* Ganti <a> menjadi <Link> */}
            <Link to="/history">History</Link>
          </li>
          <li>
            {/* Ini sudah benar dari sebelumnya */}
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
