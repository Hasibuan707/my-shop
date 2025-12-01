import { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Semua field wajib diisi!");
      return;
    }

    console.log("Signup Success:", { username, email, password });
    alert("Akun berhasil dibuat!");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h2>Sign Up</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "teal",
          borderRadius: "20px",
          width: "90%",
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          margin: "0 auto",
          color: "white",
        }}
      >
        {/* Username */}
        <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
          Create Username
        </label>
        <input
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
            marginBottom: "15px",
          }}
        />

        {/* Email */}
        <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
          Enter Your Email
        </label>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
            marginBottom: "15px",
          }}
        />

        {/* Password */}
        <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
          Create Password
        </label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
            marginBottom: "20px",
          }}
        />

        {/* Submit */}
        <button
          type="submit"
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignUpPage;
