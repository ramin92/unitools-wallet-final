export default function CoinRow({ coin }) {
  return (
    <div className="flex justify-between items-center bg-slate-900 p-4 rounded-xl mb-3">
      <div>
        <h3 className="font-bold">{coin.name}</h3>
        <p className="text-slate-400">
          {coin.symbol.toUpperCase()}
        </p>
      </div>

      <div className="text-right">
        <h3>${coin.current_price.toLocaleString()}</h3>

        <p
          className={
            coin.price_change_percentage_24h >= 0
              ? "text-green-400"
              : "text-red-400"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}