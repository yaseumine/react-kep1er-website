import React, { useState, useEffect, useRef } from "react";
import "../styles/Members.css";
import { Link } from "react-router-dom";

// --- MULAI TAMBAHKAN IMPORT GAMBAR DI SINI ---
import yujinPhoto from "../assets/images/Member/yujin.jpg";
import xiaotingPhoto from "../assets/images/Member/xiaoting.jpg";
import chaehyunPhoto from "../assets/images/Member/chaehyun.jpg";
import dayeonPhoto from "../assets/images/Member/dayeon.jpg";
import hikaruPhoto from "../assets/images/Member/hikaru.jpg";
import bahiyyihPhoto from "../assets/images/Member/bahiyyih.jpg";
import youngeunPhoto from "../assets/images/Member/youngeun.jpg";

// Data sudah diperbarui dengan detail untuk bagian belakang kartu
const membersData = [
  {
    id: 1,
    name: "Choi Yu-jin",
    description:
      "Choi Yu-jin (Hangul: 최유진, Hanja:崔有真, lahir 12 Agustus 1996) adalah salah satu penari utama dan sub-vokalis dari grup CLC serta leader dari grup Kep1er. Ia lulus dari Sekolah Ragam Seni Hanlim",
    card_back_text:
      "Leader, Lead Dancer, Vokalis. Yujin adalah anggota tertua yang menjadi pemimpin karismatik bagi Kep1er.",
    image: yujinPhoto,
  },
  {
    id: 2,
    name: "Shen Xiaoting",
    description:
      "Shen Xiaoting (Korea: 션샤오팅; Tionghoa: 沈小婷; Jepang: シェン·シャオティン; lahir 12 November 1999) adalah seorang penyanyi Tiongkok yang berada di bawah kontrak Klap & Wakeone Entertainment. Ia adalah kontestan acara survival realitas Produce Camp 2020 dan Girls Planet 999, dimana ia meraih peringkat kesembilan, menjadikannya anggota grup vokal perempuan Kep1er",
    card_back_text:
      "Main Dancer, Vokalis, Visual. Sebelum Kep1er, Xiaoting adalah seorang penari ballroom profesional.",
    image: xiaotingPhoto,
  },
  {
    id: 3,
    name: "Kim Chae-hyun",
    description:
      "Kim Chaehyun (Korea: 김채현, Tiongkok: 金采炫, Jepang: キム・チェヒョン; lahir 26 April 2002) adalah seorang penari dan penyanyi Korea Selatan yang berada di bawah naungan WAKE ONE Entertainment. Ia meraih peringkat satu pada acara surivival realitas Girls Planet 999, menjadikannya anggota grup vokal perempuan Kep1er",
    card_back_text:
      "Main Vocalist, Center. Meraih peringkat pertama di Girls Planet 999 dan dikenal karena suara emasnya.",
    image: chaehyunPhoto,
  },
  {
    id: 4,
    name: "Kim Da-yeon",
    description:
      "Kim Da Yeon (김다연; lahir 2 Maret 2003) adalah seorang penyanyi dan penari Korea Selatan yang berada di bawah naungan Jellyfish Entertainment. Ia dikenal karena menjadi peserta acara survival realitas, Produce 48 dan Girls Planet 999, di mana ia meraih peringkat keempat, menjadikannya anggota grup vokal perempuan Kep1er.",
    card_back_text:
      "Main Dancer, Lead Rapper. Dikenal sebagai 'all-rounder' karena kemampuannya yang seimbang dalam menari, rap, dan vokal.",
    image: dayeonPhoto,
  },
  {
    id: 5,
    name: "Ezaki Hikaru",
    description:
      "Ezaki Hikaru (Korea: 에자키 히카루; Tionghoa: 江崎 光; Jepang: 江崎 ひかる; lahir 12 Maret 2004) adalah seorang penari dan penyanyi asal Jepang yang berada di bawah naungan Avex Artist Academy. Ia adalah mantan anggota +GANG. Ia meraih peringkat ketujuh pada acara survival realitas Mnet Girls Planet 999, menjadikannya anggota grup vokal perempuan Kep1er.",
    card_back_text:
      "Main Dancer, Main Rapper. Anggota asal Jepang yang memukau penonton dengan energi dan ekspresi panggungnya yang kuat.",
    image: hikaruPhoto,
  },
  {
    id: 6,
    name: "Huening Bahiyyih",
    description:
      "Huening Bahiyyih (Hangul: 휴닝바히에, lahir 27 Juli 2004) adalah seorang penyanyi dan penari berkebangsaan Korea Selatan-Amerika Serikat yang berada di bawah naungan IST Entertainment. Ia meraih peringkat kedua dalam acara realitas survival Girls Planet 999, menjadikannya anggota grup vokal perempuan Kep1er.",
    card_back_text:
      "Vokalis. Adik dari Huening Kai (TXT) dan Lea (VIVA). Memiliki basis penggemar internasional yang sangat besar.",
    image: bahiyyihPhoto,
  },
  {
    id: 7,
    name: "Seo Young-eun",
    description:
      "Seo Youngeun (Korea: 서영은; Tionghoa: 徐永恩; Jepang: ソ・ヨンウン; lahir 27 Desember 2004) adalah seorang penari dan penyanyi yang berada di bawah naungan Biscuit Entertainment. Ia meraih peringkat kelima pada acara survival realitas Mnet Girls Planet 999, menjadikannya anggota grup vokal perempuan Kep1er.",
    card_back_text:
      "Main Dancer, Lead Vocalist, Rapper. Dikenal karena kemampuan menarinya yang tajam dan energinya yang tak pernah habis.",
    image: youngeunPhoto,
  },
];

const Members = () => {
  const memberRefs = useRef([]);
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestMember = null;
      let minDistance = Infinity;
      memberRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestMember = membersData[index].id;
          }
        }
      });
      setActiveMember(closestMember);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="members-page">
      <div className="members-header">
        <h1 className="members-title">Members</h1>
        <p className="members-intro-text">
          Awalnya, grup ini terdiri dari sembilan anggota yang berasal dari
          Korea Selatan, Jepang, dan Tiongkok. Mereka memulai debutnya pada 3
          Januari 2022 dengan mini album First Impact. Pada Juli 2024, dua
          anggota, Sakamoto Mashiro dan Kang Ye-seo, mengakhiri kontrak mereka
          dengan grup. Setelah itu, Kep1er melanjutkan aktivitas sebagai grup
          dengan tujuh anggota. Berikut adalah anggota Kep1er saat ini:
        </p>
      </div>

      <div className="members-wrapper">
        <div className="members-list">
          {membersData.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (memberRefs.current[index] = el)}
              className={`member-item ${
                index % 2 === 0 ? "layout-right" : "layout-left"
              } ${activeMember === member.id ? "active" : ""}`}
            >
              <div className="member-details">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-description">{member.description}</p>
              </div>

              <div className="flip-card-container">
                {/* Bagian yang diperbaiki ada di dalam sini */}
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={member.image}
                      alt={`Foto ${member.name}`}
                      className="member-photo"
                    />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-back-text">{member.card_back_text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="members-banner-wrapper">
        <div className="members-banner-content">
          <h2 className="banner-title">Creative Team Showcase</h2>
          <p className="banner-text">
            Lihat lebih banyak karya kami di galeri. Klik di sini untuk
            menjelajah!
          </p>
          <Link to="/Gallery" className="banner-button">
            Lihat Galeri
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Members;
