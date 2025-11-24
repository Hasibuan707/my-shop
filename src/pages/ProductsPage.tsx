import { useEffect, useState } from "react";
import { useCart } from "../components/CartContext";

type ProductType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountedPrice: number;
  discountPercentage: number;
  thumbnail: string;
};

export default function CardPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        const result = await response.json();

        // 🔥 Gabungkan SEMUA produk dari semua carts
        const allProducts = result.carts.flatMap((cart: any) =>
          cart.products.map((p: any) => ({
            id: p.id,
            title: p.title,
            price: p.price,
            quantity: p.quantity,
            total: p.total,
            discountedPrice: p.discountedPrice,
            discountPercentage: p.discountPercentage,
            thumbnail: p.thumbnail,
          }))
        );

        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarts();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "teal",
          color: "white",
          padding: "12px",
          borderRadius: "12px",
          marginBottom: "20px",
          fontFamily: "sans-serif",
        }}
      >
        All Ecommerce Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id + Math.random()} 
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "15px",
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />

            <h2
              style={{
                fontSize: "18px",
                margin: "5px 0",
                minHeight: "45px",
                color: "#333",
              }}
            >
              {item.title}
            </h2>

            <p style={{ color: "teal", fontWeight: "bold", margin: "5px 0" }}>
              Price: ${item.price}
            </p>

            <p style={{ fontSize: "14px", color: "#555" }}>
              Quantity: {item.quantity}
            </p>

            <p style={{ fontSize: "14px", color: "green" }}>
              Discounted Price: ${item.discountedPrice}
            </p>

            <p
              style={{ fontSize: "14px", color: "crimson", fontWeight: "bold" }}
            >
              Discount: {item.discountPercentage}%
            </p>

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
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                backgroundColor: "teal",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
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
