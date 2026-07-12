import ThemeToggle from "./ThemeToggle";
import { useWalletContext } from "../context/WalletContext";

export default function Navbar() {
  const {
    account,
    network,
    balance,
    connectWallet,
  } = useWalletContext();

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
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg"
          >
            {account
              ? account.slice(0, 6) +
                "..." +
                account.slice(-4)
              : "Connect Wallet"}
          </button>

        </div>

      </div>

      {account && (
        <div className="px-8 pb-4 text-sm">

          <p>Address : {account}</p>

          <p>Network : {network}</p>

          <p>
            Balance :
            {" "}
            {Number(balance).toFixed(4)}
            {" "}
            ETH
          </p>

        </div>
      )}
    </header>
  );
}