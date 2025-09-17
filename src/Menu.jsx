import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef();

  useEffect(() => {
    if (!showCart) return;
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCart]);

  return (
    <header className="menu-header">
      <div className="menu-logo">
        <span className="logo-text">Pyyshop</span>
      </div>
      <nav className="menu-nav">
        <span className="menu-kategori">Kategori</span>
      </nav>
      <div className="menu-search">
        <input
          type="text"
          className="search-input"
          placeholder="Cari di Pyyshop"
        />
      </div>
      <div
        className="menu-cart"
        ref={cartRef}
        onClick={() => setShowCart((v) => !v)}
        style={{ position: "relative" }}
      >
        <span className="cart-icon">&#128722;</span>
        {showCart && (
          <div className="cart-popup">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1049/1049332.png"
              alt="Keranjang Kosong"
              className="cart-popup-img"
            />
            <div className="cart-popup-title">
              Wah, keranjang belanjamu kosong
            </div>
            <div className="cart-popup-desc">
              Yuk, isi dengan barang-barang impianmu!
            </div>
            <button className="cart-popup-btn">Mulai Belanja</button>
          </div>
        )}
      </div>
      <div className="menu-auth">
        <button className="btn-masuk">Masuk</button>
        <button className="btn-daftar">Daftar</button>
      </div>
    </header>
  );
};

export default Menu;
