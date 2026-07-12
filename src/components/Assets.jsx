export default function Assets() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-5">
        Assets
      </h2>

      <div className="flex justify-between py-3 border-b border-slate-700">
        <span>Bitcoin</span>
        <span>0.45 BTC</span>
      </div>

      <div className="flex justify-between py-3 border-b border-slate-700">
        <span>Ethereum</span>
        <span>3.20 ETH</span>
      </div>

      <div className="flex justify-between py-3 border-b border-slate-700">
        <span>Solana</span>
        <span>55 SOL</span>
      </div>

      <div className="flex justify-between py-3">
        <span>USDT</span>
        <span>2400 USDT</span>
      </div>
    </div>
  );
}