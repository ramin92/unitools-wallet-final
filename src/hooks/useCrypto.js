import { useEffect, useState } from "react";
import { api } from "../services/cryptoApi";

export default function useCrypto() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCoins();

    const interval = setInterval(() => {
      loadCoins();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  async function loadCoins() {
    try {
      setLoading(true);

      const { data } = await api.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum,solana,tether",
        },
      });

      setCoins(data);
    } catch (error) {
      console.error("Failed to load crypto data:", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    coins,
    loading,
    reload: loadCoins,
  };
}