import { useState } from "react";

import BalanceCard from "../components/BalanceCard";
import TransactionTable from "../components/TransactionTable";
import Assets from "../components/Assets";
import PortfolioChart from "../components/PortfolioChart";
import PriceTicker from "../components/PriceTicker";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import MarketChart from "../components/MarketChart";
import NewsCard from "../components/NewsCard";
import WatchList from "../components/WatchList";

import useCrypto from "../hooks/useCrypto";

export default function Dashboard() {
  const { coins, loading } = useCrypto();

  const [search, setSearch] = useState("");

  if (loading) {
    return <Loading />;
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PriceTicker />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <h2 className="text-3xl font-bold mb-2">
        Dashboard
      </h2>

      <p className="text-slate-400 mb-8">
        Welcome to your crypto wallet dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {filteredCoins.map((coin) => (
          <BalanceCard
            key={coin.id}
            title={coin.name}
            amount={`$${coin.current_price.toLocaleString()}`}
            change={coin.price_change_percentage_24h}
          />
        ))}
      </div>

      <div className="mt-10">
        <MarketChart />
      </div>

      <div className="mt-10">
        <Assets />
      </div>

      <div className="mt-10">
        <PortfolioChart />
      </div>

      <div className="mt-10">
        <WatchList />
      </div>

      <div className="mt-10">
        <TransactionTable />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <NewsCard
          title="Bitcoin reaches new highs"
          source="CoinDesk"
        />

        <NewsCard
          title="Ethereum ETF gains attention"
          source="CoinTelegraph"
        />
      </div>
    </>
  );
}