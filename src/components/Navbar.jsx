import useWallet from "../hooks/useWallet";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { account, network, balance, connectWallet } = useWallet();

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-green-400">
          UniTools Wallet
        </h1>

        <div className="flex items-center gap-4">

          <ThemeToggle />

          <button
            onClick={connectWallet}
            className="bg-green-500 hover:bg-green-600 transition-all duration-300 px-5 py-2 rounded-lg"
          >
            {account
              ? account.slice(0, 6) + "..." + account.slice(-4)
              : "Connect Wallet"}
          </button>

        </div>

      </div>

      {account && (
        <div className="px-8 pb-4 space-y-1">

          <p className="text-sm text-slate-400">
            Wallet: {account}
          </p>

          <p className="text-sm text-slate-500">
            Network: {network}
          </p>

          <p className="text-sm text-green-400">
            Balance: {Number(balance).toFixed(4)} ETH
          </p>

        </div>
      )}

    </header>
  );
}