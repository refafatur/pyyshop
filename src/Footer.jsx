import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-divider"></div>
    <div className="footer-container">
      {/* Kolom 1 */}
      <div>
        <div className="footer-title">Pyyshop</div>
        <a href="#" className="footer-link">
          Tentang Pyyshop
        </a>
        <a href="#" className="footer-link">
          Hak Kekayaan Intelektual
        </a>
        <a href="#" className="footer-link">
          Karir
        </a>
        <a href="#" className="footer-link">
          Blog
        </a>
        <a href="#" className="footer-link">
          Pyyshop Affiliate Program
        </a>
        <a href="#" className="footer-link">
          Pyyshop B2B Digital
        </a>
        <a href="#" className="footer-link">
          Pyyshop Marketing Solutions
        </a>
        <a href="#" className="footer-link">
          Kalkulator Indeks Masa Tubuh
        </a>
        <a href="#" className="footer-link">
          Pyyshop Farma
        </a>
        <a href="#" className="footer-link">
          Promo Hari Ini
        </a>
        <a href="#" className="footer-link">
          Beli Lokal
        </a>
        <a href="#" className="footer-link">
          Promo Guncang
        </a>
      </div>
      {/* Kolom 2 */}
      <div>
        <div className="footer-title">Beli</div>
        <a href="#" className="footer-link">
          Tagihan & Top Up
        </a>
        <a href="#" className="footer-link">
          Pyyshop COD
        </a>
        <a href="#" className="footer-link">
          Bebas Ongkir
        </a>
        <div className="footer-title">Jual</div>
        <a href="#" className="footer-link">
          Pusat Edukasi Seller
        </a>
        <a href="#" className="footer-link">
          Daftar Mall
        </a>
        <div className="footer-title">Bantuan dan Panduan</div>
        <a href="#" className="footer-link">
          Pyyshop Care
        </a>
        <a href="#" className="footer-link">
          Syarat dan Ketentuan
        </a>
        <a href="#" className="footer-link">
          Kebijakan Privasi
        </a>
      </div>
      {/* Kolom 3 */}
      <div>
        <div className="footer-title" style={{ marginTop: 16 }}>
          Ikuti Kami
        </div>
        <div className="footer-social">
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733646.png"
              alt="Pinterest"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
      {/* Kolom 4 */}
      <div>
        <div className="footer-title">
          Nikmatin keuntungan spesial di aplikasi:
        </div>
        <div className="footer-benefit">
          <span>💲</span>Diskon 70%* hanya di aplikasi
        </div>
        <div className="footer-benefit">
          <span>🌟</span>Promo khusus aplikasi
        </div>
        <div className="footer-benefit">
          <span>🚚</span>Gratis Ongkir tiap hari
        </div>
        <div className="footer-app-desc">
          Buka aplikasi dengan scan QR atau klik tombol:
        </div>
        <div className="footer-app-row">
          <img
            src="/qr.png"
            alt="QR Pyyshop"
            className="footer-qr"
          />
          <div className="footer-store-btns">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <img
              src="/apple.png"
              alt="App Store"
            />
          </div>
        </div>
        <a href="#" className="footer-more">
          Pelajari Selengkapnya &rarr;
        </a>
      </div>
    </div>
    <div className="footer-divider"></div>
    <div className="footer-copy">
      © 2025, PT. Pyyshop.
    </div>

  </footer>
);

export default Footer;
