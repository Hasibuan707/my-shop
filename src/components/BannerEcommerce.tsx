import React, { useState, useEffect } from "react";

type BannerItem = {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  image: string;
};

const BannerEcommerce: React.FC = () => {
  const banners: BannerItem[] = [
    {
      id: 1,
      title: "Super Brand Day",
      subtitle: "Unilever",
      discount: "Diskon s.d. 75%",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.Uef8MxlfBI47mKhfdWcoNgHaCx?pid=Api&P=0&h=180",
    },
    {
      id: 2,
      title: "Promo Spesial Hari Ini",
      subtitle: "Diskon Kilat!",
      discount: "Diskon 50%",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.P1_UPMmw39dtopsEsg6GLgHaCO?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Brand Pilihan",
      subtitle: "Harga Terbaik!",
      discount: "Diskon 60%",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.llDhS6hCGfCfO6P4CniSVAHaCD?pid=Api&P=0&h=180",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // detect screen width
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive values
  const isMobile = screenSize <= 600;
  const isTablet = screenSize <= 900 && screenSize > 600;

  const containerHeight = isMobile ? "200px" : isTablet ? "250px" : "300px";
  const titleSize = isMobile ? "20px" : isTablet ? "28px" : "36px";
  const subtitleSize = isMobile ? "14px" : isTablet ? "18px" : "22px";
  const discountSize = isMobile ? "26px" : isTablet ? "34px" : "48px";

  const buttonSize = isMobile ? "30px" : "40px";

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: containerHeight,
        overflow: "hidden",
        borderRadius: "16px",
        backgroundColor: "#222",
        marginTop: "30px",
      }}
    >
      {/* Banner Image */}
      <img
        src={banners[current].image}
        alt={banners[current].title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(70%)",
        }}
      />

      {/* TEXT */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: isMobile ? "15px" : "40px",
          transform: "translateY(-50%)",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: titleSize, fontWeight: "bold" }}>
          {banners[current].title}
        </h2>

        <h3 style={{ fontSize: subtitleSize, opacity: 0.9 }}>
          {banners[current].subtitle}
        </h3>

        <p
          style={{
            fontSize: discountSize,
            fontWeight: "bold",
            marginTop: "5px",
          }}
        >
          {banners[current].discount}
        </p>

        {/* Extra Badge */}
        {!isMobile && (
          <div
            style={{
              marginTop: "8px",
              display: "inline-block",
              padding: "8px 16px",
              backgroundColor: "teal",
              borderRadius: "8px",
              fontSize: isTablet ? "14px" : "20px",
              fontWeight: "bold",
            }}
          >
            +5% Diskon Pengguna PLUS
          </div>
        )}
      </div>

      {/* BUTTON LEFT */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          width: buttonSize,
          height: buttonSize,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: isMobile ? "16px" : "20px",
        }}
      >
        ❮
      </button>

      {/* BUTTON RIGHT */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          width: buttonSize,
          height: buttonSize,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: isMobile ? "16px" : "20px",
        }}
      >
        ❯
      </button>

      {/* DOT INDICATOR */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "8px" : "15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: isMobile ? "5px" : "8px",
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            onClick={() => setCurrent(index)}
            style={{
              width: current === index ? (isMobile ? "10px" : "14px") : "8px",
              height: current === index ? (isMobile ? "10px" : "14px") : "8px",
              backgroundColor: current === index ? "white" : "#aaa",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerEcommerce;
