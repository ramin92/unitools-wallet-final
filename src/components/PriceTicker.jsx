import useCrypto from "../hooks/useCrypto";

export default function PriceTicker() {
  const { coins } = useCrypto();

  return (
    <div className="bg-slate-900 rounded-xl p-4 mb-6 overflow-x-auto">
      <div className="flex gap-8">
        {coins.map((coin) => (
          <div key={coin.id} className="whitespace-nowrap">
            <span className="font-bold">
              {coin.symbol.toUpperCase()}
            </span>

            <span className="ml-2">
              ${coin.current_price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}