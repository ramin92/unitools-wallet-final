import { useState, useEffect } from "react";
import { ethers } from "ethers";
import useTokens from "./useTokens";

export default function useWallet() {

  const [account, setAccount] = useState("");
  const [network, setNetwork] = useState("");
  const [balance, setBalance] = useState("");

  const { tokens, loadTokens } = useTokens();


  const networks = {
    "0x1": "Ethereum Mainnet",
    "0xaa36a7": "Sepolia Testnet",
    "0x89": "Polygon",
    "0x38": "BNB Smart Chain",
  };


  useEffect(() => {
    checkWallet();
  }, []);



  async function updateWallet(address) {

    const chainId =
      await window.ethereum.request({
        method: "eth_chainId",
      });


    setNetwork(
      networks[chainId] || chainId
    );


    const provider =
      new ethers.BrowserProvider(
        window.ethereum
      );


    const value =
      await provider.getBalance(address);


    setBalance(
      ethers.formatEther(value)
    );


    await loadTokens(address);

  }




  async function checkWallet() {

    if (!window.ethereum) return;


    const accounts =
      await window.ethereum.request({
        method: "eth_accounts",
      });


    if(accounts.length > 0){

      setAccount(accounts[0]);

      await updateWallet(accounts[0]);

    }

  }




  async function connectWallet() {

    if (!window.ethereum) {

      alert("MetaMask is not installed");

      return;

    }


    const accounts =
      await window.ethereum.request({
        method:"eth_requestAccounts",
      });


    setAccount(accounts[0]);


    await updateWallet(accounts[0]);

  }




  return {

    account,

    network,

    balance,

    tokens,

    connectWallet,

  };

}