import { useWalletContext } from "../context/WalletContext";

export default function Assets() {

  const { tokens } = useWalletContext();

  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-5">
        Wallet Assets
      </h2>

      {tokens.length === 0 ? (

        <p className="text-slate-400">
          No Tokens Found
        </p>

      ) : (

        tokens.map((token) => (

          <div
            key={token.symbol}
            className="flex justify-between py-3 border-b border-slate-700"
          >

            <div>

              <h3>{token.name}</h3>

              <p className="text-slate-400">
                {token.symbol}
              </p>

            </div>

            <div className="text-green-400">

              {Number(token.balance).toFixed(4)}

            </div>

          </div>

        ))

      )}

    </div>
  );
}