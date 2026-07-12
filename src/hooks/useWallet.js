import { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

export default function useWallet() {
  const [account, setAccount] = useState("");
  const [network, setNetwork] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    checkWallet();
  }, []);

  async function checkWallet() {
    if (!window.ethereum) return;

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      setAccount(accounts[0]);

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      const networks = {
        "0x1": "Ethereum Mainnet",
        "0xaa36a7": "Sepolia Testnet",
        "0x89": "Polygon",
        "0x38": "BNB Smart Chain",
      };

      setNetwork(networks[chainId] || chainId);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const value = await provider.getBalance(accounts[0]);

      setBalance(ethers.formatEther(value));
    }
  }

  async function connectWallet() {
    try {
      if (!window.ethereum) {
        toast.error("MetaMask is not installed");
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      const networks = {
        "0x1": "Ethereum Mainnet",
        "0xaa36a7": "Sepolia Testnet",
        "0x89": "Polygon",
        "0x38": "BNB Smart Chain",
      };

      setNetwork(networks[chainId] || chainId);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const value = await provider.getBalance(accounts[0]);

      setBalance(ethers.formatEther(value));

      toast.success("Wallet Connected");
    } catch (error) {
      toast.error("Connection Failed");
      console.error(error);
    }
  }

  return {
    account,
    network,
    balance,
    connectWallet,
  };
}