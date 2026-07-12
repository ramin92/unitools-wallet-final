export default function BalanceCard({ title, amount, change }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <p className="text-slate-400">{title}</p>

      <h2 className="text-2xl font-bold mt-3">
        {amount}
      </h2>

      <p
        className={`mt-2 text-sm ${
          change >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {change?.toFixed(2)}%
      </p>
    </div>
  );
}