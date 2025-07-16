import { useState, useEffect } from "react";
import { check, mint } from "@solopass/sdk";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState(null);
  const [expiresIn, setExpiresIn] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleMint = async () => {
    setLoading(true);
    const newAddr = await mint();
    setAddress(newAddr);
    const res = await check(newAddr);
    setStatus(res);
    setLoading(false);

    if (res.valid) {
      navigate("/dashboard");
    }
  };

  // countdown timer logic
  useEffect(() => {
    if (!status?.expiresAt) return;

    const interval = setInterval(() => {
      const now = new Date();
      const expiry = new Date(status.expiresAt);
      const diff = expiry.getTime() - now.getTime();

      if (diff <= 0) {
        setExpiresIn("❌ Expired");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setExpiresIn(`${days}d ${hours}h ${mins}m ${secs}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎟️ SoloPass Demo</h1>
      <button onClick={handleMint} disabled={loading}>
        {loading ? "Minting..." : "Mint SoloPass"}
      </button>

      {address && (
        <div style={{ marginTop: "1rem" }}>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Valid:</strong> {status?.valid ? "✅ Yes" : "❌ No"}</p>
          <p><strong>Expires:</strong> {status?.expiresAt}</p>
          <p><strong>Countdown:</strong> {expiresIn}</p>
        </div>
      )}
    </div>
  );
}

