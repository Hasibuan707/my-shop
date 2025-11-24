import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  category: string;
};

export default function MakeupProducts() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchMakeupProducts();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchMakeupProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      const filtered = data.products.filter((product: Product) =>
        ["beauty", "skincare", "fragrances"].includes(product.category)
      );

      setProducts(filtered);
    } catch (error) {
      console.error("Error fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  // Dynamic responsive image height
  const imageHeight =
    windowWidth < 480 ? "130px" : windowWidth < 800 ? "150px" : "170px";

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          marginBottom: "20px",
          fontSize: windowWidth < 480 ? "18px" : "22px",
        }}
      >
        Makeup Collection
      </h2>

      <div
        style={{
          display: "grid",

          // RESPONSIVE GRID
          gridTemplateColumns:
            windowWidth < 480
              ? "repeat(2, 1fr)"
              : windowWidth < 900
              ? "repeat(3, 1fr)"
              : "repeat(4, 1fr)",

          gap: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              backgroundColor: "white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: "100%",
                height: imageHeight,
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />

            <h3
              style={{
                fontSize: windowWidth < 480 ? "14px" : "18px",
                marginBottom: "8px",
                minHeight: "40px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "14px",
                opacity: 0.7,
                height: "40px",
                overflow: "hidden",
              }}
            >
              {item.description.slice(0, 60)}...
            </p>

            <div
              style={{
                marginTop: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: windowWidth < 480 ? "15px" : "18px",
                }}
              >
                ${item.price}
              </span>

              <span style={{ fontSize: "14px" }}>⭐ {item.rating}</span>
            </div>

            <button
              onClick={() =>
                addToCart({
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  thumbnail: item.thumbnail,
                  quantity: 1,
                })
              }
              style={{
                width: "100%",
                marginTop: "12px",
                padding: "10px",

                backgroundColor: "#e91e63",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",

                fontSize: windowWidth < 480 ? "14px" : "16px",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
