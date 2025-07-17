import React from "react";
import logo from "/logo.png"; // expects logo.png in apps/landing/public

export default function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <img
        src={logo}
        alt="AccessLayer Logo"
        style={{ width: "180px", marginBottom: "20px" }}
      />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>AccessLayer</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem" }}>
        Tokenized Infrastructure. Elegant by Design. Built on Coreum.
      </p>
      <a
        href="/demo-v5/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        🔓 View Live Demo v5
      </a>
    </div>
  );
}

