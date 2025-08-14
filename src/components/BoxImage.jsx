import React from "react";
import "../styles/BoxImage.css";

export default function BoxImage({ imageUrl }) {
  return (
    <div className="box">
      <div className="rectangle">
        {imageUrl ? (
          <img src={imageUrl} alt="Box" />
        ) : (
          // <--- Nilai untuk backgroundColor ditambahkan di sini
          <div
            style={{ backgroundColor: "#444", width: "100%", height: "100%" }}
          />
        )}
      </div>
    </div>
  );
}
