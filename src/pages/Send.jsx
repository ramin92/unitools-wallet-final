import { useState } from "react";
import { ethers } from "ethers";
import { useWalletContext } from "../context/WalletContext";

export default function Send() {
  const { account } = useWalletContext();

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  async function sendETH() {
    if (!window.ethereum) return;

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);

      const signer = await provider.getSigner();

      const tx = await signer.sendTransaction({
        to,
        value: ethers.parseEther(amount),
      });

      alert("Transaction Sent");

      console.log(tx);

      await tx.wait();

      alert("Transaction Confirmed");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <div className="bg-slate-900 p-8 rounded-xl">

      <h1 className="text-3xl font-bold mb-6">
        Send ETH
      </h1>

      <input
        className="w-full p-3 rounded bg-slate-800 mb-4"
        placeholder="Receiver Address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <input
        className="w-full p-3 rounded bg-slate-800 mb-4"
        placeholder="Amount ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={sendETH}
        className="bg-green-500 px-6 py-3 rounded"
      >
        Send
      </button>

    </div>
  );
}