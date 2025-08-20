import React from "react";
import {
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaWeibo,
  FaCoffee,
} from "react-icons/fa";
import "../styles/Footer.css";

// Tambahkan properti className untuk setiap link
const socialLinks = [
  { href: "#", icon: <FaTiktok />, name: "TikTok", className: "tiktok" },
  { href: "#", icon: <FaYoutube />, name: "YouTube", className: "youtube" },
  { href: "#", icon: <FaTwitter />, name: "X (Twitter)", className: "twitter" },
  {
    href: "#",
    icon: <FaInstagram />,
    name: "Instagram",
    className: "instagram",
  },
  { href: "#", icon: <FaFacebook />, name: "Facebook", className: "facebook" },
  { href: "#", icon: <FaCoffee />, name: "Daum Cafe", className: "daum-cafe" },
  { href: "#", icon: <FaWeibo />, name: "Weibo", className: "weibo" },
];

function Footer() {
  return (
    <footer className="footer-container">
      <img className="footer-logo" alt="Kep1er Logo" src="vite.png" />
      <div className="social-icons">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            // Gabungkan class dasar dengan class unik
            className={`social-icon-link ${social.className}`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
