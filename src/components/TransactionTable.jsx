export default function TransactionTable() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Recent Transactions
      </h2>

      <div className="flex justify-between py-3 border-b border-slate-700">
        <span>Receive BTC</span>
        <span className="text-green-400">+0.05 BTC</span>
      </div>

      <div className="flex justify-between py-3 border-b border-slate-700">
        <span>Send ETH</span>
        <span className="text-red-400">-1.20 ETH</span>
      </div>

      <div className="flex justify-between py-3">
        <span>Swap SOL</span>
        <span className="text-yellow-400">12 SOL</span>
      </div>
    </div>
  );
}