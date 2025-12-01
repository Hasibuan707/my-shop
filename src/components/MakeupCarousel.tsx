import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const MakeupCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));

    const handleResize = () => {
      // Mobile: tampilkan 3 gambar
      if (window.innerWidth <= 600) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // Set awal
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + slidesToShow) % products.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - slidesToShow + products.length) % products.length
    );
  };

  if (products.length === 0) return <p>Loading...</p>;

  return (
    <div
      style={{
        width: "80%",
        maxWidth: 600,
        margin: "auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      {" "}
      <h1
        style={{
          fontSize: slidesToShow === 3 ? "18px" : "30px",
          color: "teal",
          justifyItems: "start",
        }}
      >
        New Brand
      </h1>
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: 20,
          background: "white",
          color: "black",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
      >
        ❮
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          gap: "6px",
        }}
      >
        {products.slice(current, current + slidesToShow).map((product) => (
          <div key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: slidesToShow === 1 ? "100%" : "80%",
                height: "120px",
                objectFit: "contain",
                borderRadius: 8,
                fontSize: "15px",
              }}
            />
            {slidesToShow === 3 && (
              <>
                <h3 style={{ marginTop: 20, fontSize: "15px" }}>
                  {product.title}
                </h3>
                <p style={{ fontWeight: "bold" }}>
                  $ {product.price.toLocaleString("id-ID")}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: 20,
          background: "white",
          color: "black",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
      >
        ❯
      </button>
      <div style={{ marginTop: 10 }}>
        {products.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              display: "inline-block",
              width: 2,
              height: 2,
              borderRadius: "50%",
              margin: "0 4px",
              background: index === current ? "powderblue" : "ghostwhite",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MakeupCarousel;
