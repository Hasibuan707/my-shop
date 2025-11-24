import { useCart } from "../components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Your Cart</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                borderBottom: "1px solid #ddd",

                /* RESPONSIVE */
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {/* IMAGE */}
              <img
                src={item.thumbnail}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",

                  /* RESPONSIVE: gambar mengecil */
                  ...(window.innerWidth < 600 && {
                    width: "65px",
                    height: "65px",
                  }),
                }}
              />

              {/* TEXT */}
              <div
                style={{
                  flex: 1,
                  minWidth: "200px",
                }}
              >
                <h3
                  style={{
                    fontSize: window.innerWidth < 600 ? "15px" : "18px",
                    margin: "0",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ margin: "5px 0" }}>
                  ${item.price} x {item.quantity}
                </p>
              </div>

              {/* BUTTON REMOVE */}
              <button
                onClick={function removeCart() {
                  removeFromCart(item.id);
                  alert("Apakah anda yakin untuk hapus?");
                }}
                style={{
                  backgroundColor: "crimson",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",

                  /* RESPONSIVE: button full width di HP */
                  ...(window.innerWidth < 600 && {
                    width: "100%",
                  }),
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2 style={{ marginTop: "20px" }}>Total: ${totalPrice}</h2>

          {/* CLEAR CART BUTTON */}
          <button
            onClick={function removeAll() {
              clearCart();

              alert(
                "Apakah Anda yakin untuk hapus semua produk yang ada di keranjang anda?"
              );
            }}
            style={{
              marginTop: "10px",
              padding: "12px",
              backgroundColor: "teal",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
