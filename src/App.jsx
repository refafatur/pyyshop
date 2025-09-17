import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Dummy data kategori
  const categories = [
    {
      name: "Makanan Kering",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      name: "Figure",
      img: "https://cdn-icons-png.flaticon.com/512/616/616494.png",
    },
    {
      name: "Tas Selempang Pria",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075979.png",
    },
    {
      name: "Flat Shoes Wanita",
      img: "https://cdn-icons-png.flaticon.com/512/3075/3075976.png",
    },
  ];

  // Tab state untuk Top Up
  const [tab, setTab] = useState("Pulsa");

  // 🔥 Banner carousel data
  const banners = [
    {
      title: "Nyam!",
      subtitle: "Kebutuhan Harian",
      discount: "Diskon s.d. 50%*",
      img: "./src/assets/food.png",
    },
    {
      title: "Fresh!",
      subtitle: "Buah & Sayur",
      discount: "Diskon s.d. 30%*",
      img: "./src/assets/buah.png",
    },
    {
      title: "Hemat!",
      subtitle: "Minuman Segar",
      discount: "Diskon s.d. 40%*",
      img: "./src/assets/drink.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="main-bg app-content-spacing">
      {/* 🔥 Banner Carousel */}
      <div className="carousel-outer">
        <button
          className="carousel-btn custom-carousel-btn left"
          onClick={prevSlide}
          aria-label="Sebelumnya"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M15 6l-6 6 6 6"
              stroke="#555"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="banner-carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <div className="banner-slide" key={index}>
                <div className="banner-content">
                  <div>
                    <div className="banner-title">{banner.title}</div>
                    <div className="banner-subtitle">{banner.subtitle}</div>
                    <div className="banner-discount">{banner.discount}</div>
                  </div>
                  <img src={banner.img} alt="Banner" className="banner-img" />
                </div>
              </div>
            ))}
          </div>

          {/* Indicator */}
          <div className="carousel-dots">
            {banners.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${current === idx ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>
        </div>
        <button
          className="carousel-btn custom-carousel-btn right"
          onClick={nextSlide}
          aria-label="Berikutnya"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9 6l6 6-6 6"
              stroke="#555"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="cards-row">
        <div className="card single-card">
          <div className="card-section">
            <div className="card-title">Kategori Pilihan</div>
            <div className="kategori-list">
              {categories.map((cat, idx) => (
                <div className="kategori-item" key={idx}>
                  <img src={cat.img} alt={cat.name} className="kategori-img" />
                  <div className="kategori-label">{cat.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-section">
            <div className="card-title topup-title">
              Top Up & Tagihan{" "}
              <span className="lihat-semua">Lihat Semua</span>
            </div>

            {/* Tabs */}
            <div className="topup-tabs">
              {["Pulsa", "Paket Data", "Listrik PLN", "Roaming"].map((t) => (
                <div
                  key={t}
                  className={`topup-tab${tab === t ? " active" : ""}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="topup-form">
              {/* Pulsa */}
              {tab === "Pulsa" && (
                <>
                  <div className="topup-form-row">
                    <label>Nomor Telepon</label>
                    <input type="text" placeholder="Masukan Nomor" />
                  </div>
                  <div className="topup-form-row">
                    <label>Nominal</label>
                    <select>
                      <option>Pilih Nominal</option>
                      <option>10.000</option>
                      <option>20.000</option>
                      <option>50.000</option>
                      <option>100.000</option>
                    </select>
                    <button className="topup-btn">Beli</button>
                  </div>
                </>
              )}

              {/* Paket Data */}
              {tab === "Paket Data" && (
                <>
                  <div className="topup-form-row">
                    <label>Nomor Telepon</label>
                    <input type="text" placeholder="Masukan Nomor" />
                  </div>
                  <div className="topup-form-row">
                    <label>Pilih Paket</label>
                    <select>
                      <option>Pilih Paket</option>
                      <option>1GB - Rp10.000</option>
                      <option>5GB - Rp25.000</option>
                      <option>10GB - Rp50.000</option>
                    </select>
                    <button className="topup-btn">Beli</button>
                  </div>
                </>
              )}

              {/* Listrik PLN */}
              {tab === "Listrik PLN" && (
                <>
                  <div className="topup-form-row">
                    <label>ID Pelanggan / Meter</label>
                    <input type="text" placeholder="Masukan ID Pelanggan" />
                  </div>
                  <div className="topup-form-row">
                    <label>Nominal Token</label>
                    <select>
                      <option>Pilih Nominal</option>
                      <option>20.000</option>
                      <option>50.000</option>
                      <option>100.000</option>
                      <option>200.000</option>
                    </select>
                    <button className="topup-btn">Beli</button>
                  </div>
                </>
              )}

              {/* Roaming */}
              {tab === "Roaming" && (
                <>
                  <div className="topup-form-row">
                    <label>Nomor Telepon</label>
                    <input type="text" placeholder="Masukan Nomor" />
                  </div>
                  <div className="topup-form-row">
                    <label>Paket Roaming</label>
                    <select>
                      <option>Pilih Paket</option>
                      <option>Harian - Rp50.000</option>
                      <option>Mingguan - Rp150.000</option>
                      <option>Bulanan - Rp500.000</option>
                    </select>
                    <button className="topup-btn">Beli</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="shop-container">
        {/* Area tambahan untuk konten baru */}
        <div className="extra-content">
          {/* Tab For You & Produk Incaranmu */}
          <div className="product-tabs">
            <span
              className={`product-tab${tab === "For You" ? " active" : ""}`}
              onClick={() => setTab("For You")}
            >
              For You
            </span>
            <span
              className={`product-tab${
                tab === "Produk Incaranmu" ? " active" : ""
              }`}
              onClick={() => setTab("Produk Incaranmu")}
            >
              Produk Incaranmu
            </span>
          </div>
          <div className="product-tab-underline">
            <div
              className="underline"
              style={{
                left: tab === "For You" ? 30 : 182,
                width: 60,
              }}
            />
          </div>
          {/* Produk grid */}
          <div className="product-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
                title: "Laptop Axioo Mybook Hype 5...",
                price: 4229000,
                discount: 30,
                rating: 4.9,
                sold: "500+",
                shop: "Onestop Gaming",
              },
              {
                img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                title: "Xiaomi TV A 32 | Dolby DTS ...",
                price: 1698000,
                discount: 15,
                rating: 4.9,
                sold: "5rb+",
                shop: "Xiaomi Indonesia",
              },
              {
                img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
                title: "Harman Kardon Onyx Studio 7",
                price: 2690000,
                discount: 40,
                rating: 5.0,
                sold: "1rb+",
                shop: "Harman Kardon Official Stc",
              },
              {
                img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
                title: "CAPRA DELUXE SERIES | ...",
                price: 3524000,
                discount: 20,
                rating: 5.0,
                sold: "100+",
                shop: "xionco",
              },
              {
                img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                title: "Official Itel Smartwatch O43 ...",
                price: 349000,
                discount: 42,
                rating: 4.9,
                sold: "1rb+",
                shop: "itel Authorized Shop",
              },
              {
                img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
                title: "CHANGHONG KULKAS 2 PINT...",
                price: 2018000,
                discount: 44,
                rating: 4.8,
                sold: "750+",
                shop: "Changhong Home Applian",
              },
              {
                img: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&w=400&q=80",
                title: "Samsung Galaxy A14 5G",
                price: 2499000,
                discount: 25,
                rating: 4.9,
                sold: "10rb+",
                shop: "Samsung Official Store",
              },
              {
                img: "https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=400&q=80",
                title: "Sony WH-1000XM4 Headphone",
                price: 3999000,
                discount: 35,
                rating: 5.0,
                sold: "3rb+",
                shop: "Sony Audio Store",
              },
              {
                img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                title: "ASUS ROG Strix G15 Gaming",
                price: 15999000,
                discount: 18,
                rating: 4.9,
                sold: "500+",
                shop: "ASUS ROG Official",
              },
              {
                img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
                title: "Apple iPad 9th Gen 10.2 Inch",
                price: 5899000,
                discount: 10,
                rating: 5.0,
                sold: "2rb+",
                shop: "Apple Authorized Store",
              },
              {
                img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
                title: "Logitech MX Master 3S Mouse",
                price: 1299000,
                discount: 28,
                rating: 4.9,
                sold: "1rb+",
                shop: "Logitech Official",
              },
              {
                img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                title: "Dyson Supersonic Hair Dryer",
                price: 6999000,
                discount: 12,
                rating: 5.0,
                sold: "800+",
                shop: "Dyson Official",
              },
            ]
              .slice(0, 12)
              .map((p, i) => (
                <div className="product-card" key={i}>
                  <div className="product-discount">{p.discount}%</div>
                  <img src={p.img} alt={p.title} className="product-img" />
                  <div className="product-title">{p.title}</div>
                  <div className="product-price">
                    Rp{p.price.toLocaleString()}
                  </div>
                  <div className="product-meta">
                    <span className="star">★</span>
                    {p.rating} • {p.sold} terjual
                  </div>
                  <div className="product-shop">{p.shop}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
