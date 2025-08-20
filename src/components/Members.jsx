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
// import photocardBg from "../assets/images/member/photocard_bg.png";
// Data sudah diperbarui dengan detail untuk bagian belakang kartu
const membersData = [
  {
    id: 1,
    name: "Choi Yujin",
    photo: yujinPhoto,
    layout: "layout-right",
    description:
      "Yujin adalah leader dari Kep1er. Dikenal dengan kepemimpinannya yang kuat dan pengalamannya yang luas di industri hiburan.",
    backInfo: {
      roles: "Leader, Vokal",
      description:
        "Dikenal dengan kepemimpinannya yang kuat dan pengalamannya yang luas.",
    },
  },
  {
    id: 2,
    name: "Sakamoto Mashiro",
    photo: xiaotingPhoto,
    layout: "layout-left",
    description:
      "Mashiro adalah co-leader grup. Ia membawa pesona yang tenang namun kuat ke dalam setiap penampilan.",
    backInfo: {
      roles: "Co-Leader, Vokal",
      description:
        "Membawa pesona yang tenang namun kuat dalam setiap penampilan.",
    },
  },
  {
    id: 3,
    name: "Kim Chae-hyun",
    photo: chaehyunPhoto,
    layout: "layout-right",
    description:
      "Chaehyun adalah main vocalist dengan kemampuan vokal yang luar biasa. Ia juga dikenal karena pesonanya di atas panggung.",
    backInfo: {
      roles: "Main Vocalist, Center",
      description:
        "Meraih peringkat pertama di Girls Planet 999 dan dikenal karena suara emasnya.",
    },
  },
  {
    id: 4,
    name: "Kim Da-yeon",
    photo: dayeonPhoto,
    layout: "layout-left",
    description:
      "Dayeon adalah anggota yang berbakat dalam menari dan rap. Ia memiliki karisma yang kuat di atas panggung.",
    backInfo: {
      roles: "Main Dancer, Lead Rapper",
      description:
        "Dikenal sebagai 'all-rounder' karena kemampuannya yang seimbang dalam menari, rap, dan vokal.",
    },
  },
  {
    id: 5,
    name: "Ezaki Hikaru",
    photo: hikaruPhoto,
    layout: "layout-right",
    description:
      "Hikaru adalah anggota yang energik dengan kemampuan menari yang mengesankan. Ia juga memiliki bakat dalam rap.",
    backInfo: {
      roles: "Main Dancer, Main Rapper",
      description:
        "Anggota asal Jepang yang memukau penonton dengan energi dan ekspresi panggungnya yang kuat.",
    },
  },
  {
    id: 6,
    name: "Huening Bahiyyih",
    photo: bahiyyihPhoto,
    layout: "layout-left",
    description:
      "Bahiyyih adalah vokalis berbakat dengan daya tarik yang kuat. Ia memiliki banyak penggemar internasional.",
    backInfo: {
      roles: "Vokalis",
      description:
        "Adik dari Huening Kai (TXT) dan Lea (VIVA). Memiliki basis penggemar internasional yang sangat besar.",
    },
  },
  {
    id: 7,
    name: "Seo Young-eun",
    photo: youngeunPhoto,
    layout: "layout-right",
    description:
      "Youngeun adalah all-rounder yang energik. Kemampuan menarinya yang tajam dan vokalnya yang stabil membuatnya menonjol.",
    backInfo: {
      roles: "Main Dancer, Lead Vocalist, Rapper",
      description:
        "Dikenal karena kemampuan menarinya yang tajam dan energinya yang tak pernah habis.",
    },
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

  function MemberItem({ member, isActive }) {
    return (
      <div
        className={`member-item ${member.layout} ${isActive ? "active" : ""}`}
      >
        <div className="flip-card-container">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={member.photo}
                alt={member.name}
                className="member-photo"
              />
            </div>
            <div className="flip-card-back">
              <div className="photocard-frame">
                <h4 className="member-roles">{member.backInfo.roles}</h4>
                <p className="member-back-desc">
                  {member.backInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="member-details">
          <h3 className="member-name">{member.name}</h3>
          <p className="member-description">{member.description}</p>
        </div>
      </div>
    );
  }

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
            <MemberItem
              key={member.id}
              member={member}
              isActive={activeMember === member.id}
              ref={(el) => (memberRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
