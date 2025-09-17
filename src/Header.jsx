import "./Header.css";

function Header() {
  return (
    <header className="pyy-header">
      <div className="pyy-header-left">
        <span className="pyy-header-promo-bold">
          Gratis Ongkir + Banyak Promo
        </span>
        <span className="pyy-header-promo-normal">belanja di aplikasi</span>
        <svg width="16" height="16" fill="none" className="pyy-header-arrow">
          <path
            d="M6 4l4 4-4 4"
            stroke="#222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <nav className="pyy-header-nav">
        <a href="#">Tentang pyyshop</a>
        <a href="#">Mulai Berjualan</a>
        <a href="#">Promo</a>
        <a href="#">pyyshop Care</a>
      </nav>
    </header>
  );
}

export default Header;
