import React from "react";

const Footer: React.FC = () => {
  // Deteksi mobile dan tablet
  const width = window.innerWidth;
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 900;

  // Style responsif kolom
  const columnWidth = isMobile ? "100%" : isTablet ? "45%" : "30%";

  return (
    <footer
      style={{
        backgroundColor: "teal",
        color: "white",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: isMobile ? "center" : "space-between",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: "1",
            minWidth: columnWidth,
            marginBottom: "20px",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>MyShop</h2>
          <p style={{ maxWidth: "250px", opacity: 0.9, margin: "auto" }}>
            Belanja mudah dan terpercaya. Temukan produk terbaik setiap hari.
          </p>
        </div>

        {/* Middle Column */}
        <div
          style={{
            flex: "1",
            minWidth: columnWidth,
            marginBottom: "20px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>About</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              lineHeight: "28px",
              cursor: "pointer",
            }}
          >
            <li>Tentang Kami</li>
            <li>FAQ</li>
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>

        {/* Right Column */}
        <div
          style={{
            flex: "1",
            minWidth: columnWidth,
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Contact & Social</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              lineHeight: "28px",
            }}
          >
            <li>Email: support@myshop.com</li>
            <li>Phone: +62 812-3456-7890</li>

            <li style={{ cursor: "pointer" }}>
              <a style={{ color: "white", textDecoration: "none" }}>
                Instagram
              </a>
            </li>

            <li style={{ cursor: "pointer" }}>
              <a style={{ color: "white", textDecoration: "none" }}>Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          opacity: 0.8,
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} MyShop — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
