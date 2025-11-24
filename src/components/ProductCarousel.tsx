import { useEffect, useState } from "react";

type DetailFetch = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

const ProductsCarousel = () => {
  const [products, setProducts] = useState<DetailFetch[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const newData = await response.json();
      setProducts(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 600) setItemsPerSlide(1);
      else if (window.innerWidth <= 900) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  if (products.length === 0) return <p>Loading...</p>;

  return (
    <div
      style={{
        width: "95%",
        margin: "auto",
        padding: "20px 0",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ color: "teal", marginBottom: "15px" }}>Kategori Pilihan</h2>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const start = slideIndex * itemsPerSlide;
            const slideItems = products.slice(start, start + itemsPerSlide);

            return (
              <div
                key={slideIndex}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  width: "100%",
                  padding: "10px 5px",
                }}
              >
                {slideItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      background: "#fff",
                      borderRadius: "10px",
                      padding: "10px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "50%",
                        height: "150px",
                        objectFit: "contain",
                        marginBottom: "8px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "12px",
                        minHeight: "35px",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontWeight: "bold", color: "teal" }}>
                      ${item.price}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "5px",
          transform: "translateY(-50%)",
          padding: "10px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "teal",
          color: "white",
          cursor: "pointer",
        }}
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "5px",
          transform: "translateY(-50%)",
          padding: "10px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "teal",
          color: "white",
          cursor: "pointer",
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default ProductsCarousel;
