import { useEffect, useState } from "react";
import { api } from "../services/cryptoApi";

export default function useCrypto() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadCoins() {
    try {
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


  useEffect(() => {
    loadCoins();

    const interval = setInterval(() => {
      loadCoins();
    }, 60000);

    return () => clearInterval(interval);

  }, []);


  return {
    coins,
    loading,
    reload: loadCoins,
  };
}