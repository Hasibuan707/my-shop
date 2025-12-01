import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Login sederhana — bisa kamu ganti dengan fetch API ke backend
    if (username === "admin" && password === "12345") {
      setError("");
      navigate("/");
      alert("Kamu berhasil Login");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "50vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d5e6e1ff",
        marginTop: "50px",
        borderRadius: "50px",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Login </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "teal",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          Masuk
        </button>
        <div style={{ marginTop: "10px" }}>
          Belum punya akun? Daftar{" "}
          <Link
            style={{
              // textDecoration: "none",
              fontSize: "15px",
              cursor: "pointer",
              fontFamily: "serif",
            }}
            to="/signup"
          >
            disini
          </Link>{" "}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
