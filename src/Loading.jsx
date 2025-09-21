import React from "react";
import "./Loading.css"; // tambahkan import css

export default function Loading() {
  return (
    <div className="loading-container">
      <img
        src="/halo.gif" // GIF loading animasi umum
        alt="Loading"
        className="loading-gif"
      />
      <span className="loading-text">
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </span>
    </div>
  );
}

