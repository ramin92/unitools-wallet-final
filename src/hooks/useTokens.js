import { useState } from "react";
import { ethers } from "ethers";

export default function useTokens() {

  const [tokens, setTokens] = useState([]);

  async function loadTokens(account) {

    if (!window.ethereum) return;

    if (!account) return;


    const provider = new ethers.BrowserProvider(
      window.ethereum
    );


    const tokenList = [
      {
        name: "USDT",
        symbol: "USDT",
        address:
          "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        decimals: 6,
      },

      {
        name: "USDC",
        symbol: "USDC",
        address:
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
      },
    ];


    const result = [];


    for (const token of tokenList) {


      const contract = new ethers.Contract(

        token.address,

        [
          "function balanceOf(address owner) view returns(uint256)"
        ],

        provider

      );


      const balance =
        await contract.balanceOf(account);



      result.push({

        name: token.name,

        symbol: token.symbol,

        balance:
          ethers.formatUnits(
            balance,
            token.decimals
          )

      });


    }


    setTokens(result);

  }


  return {

    tokens,

    loadTokens

  };

}