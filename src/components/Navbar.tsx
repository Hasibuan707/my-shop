import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const isMobile = window.innerWidth < 768;

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "teal",
        borderRadius: "10px",
        padding: "10px 20px",
        color: "white",
        position: "relative",
        height: "50px",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          MyShop
        </Link>
      </div>

      {/* HAMBURGER (Muncul di Mobile) */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: isMobile ? "block" : "none",
          fontSize: "26px",
          cursor: "pointer",
        }}
      >
        ☰
      </div>

      {/* MENU LIST */}
      <ul
        style={{
          display: isMobile ? (open ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          listStyle: "none",
          gap: isMobile ? "5px" : "30px",
          position: isMobile ? "absolute" : "static",
          top: "65px",
          right: "0",
          width: isMobile ? "100%" : "auto",
          backgroundColor: isMobile ? "#dcf6e8" : "transparent",
          padding: isMobile ? "2px 0" : "0",
          margin: 0,
          textAlign: "center",
          borderRadius: "10px",
          zIndex: 99,
          filter: "blur(0)",
          fontSize: isMobile ? "12px" : "18px",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "teal",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            style={{
              color: "teal",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Product
          </Link>
        </li>

        <li>
          <Link
            to="/makeup"
            style={{
              color: "teal",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Product Kecantikan
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            style={{
              width: "50px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              color: isMobile ? "white" : "black",
            }}
          >
            🛒
          </Link>
        </li>

        {/* LOGIN DIPINDAH KE MENU MOBILE */}
        {isMobile && (
          <>
            <li>
              <Link
                to="/login"
                style={{
                  color: "teal",
                  textDecoration: "none",
                  fontWeight: "bold",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  display: "inline-block",
                }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{
                  color: "teal",
                  textDecoration: "none",
                  fontWeight: "bold",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  display: "inline-block",
                }}
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Login di Desktop */}
      {!isMobile && (
        <div style={{ gap: "10px", display: "flex" }}>
          <div>
            <Link
              to="/signup"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: "8px 16px",
                borderRadius: "5px",
              }}
            >
              Sign Up
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: "8px 16px",
                borderRadius: "5px",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
