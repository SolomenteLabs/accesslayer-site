import React from "react";
import { ChainProvider, useChain } from "@cosmos-kit/react";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";

const coreumChain = {
  chainId: "coreum-testnet-1",
  chainName: "Coreum Testnet",
  rpc: "https://full-node.testnet-1.coreum.dev:26657",
  rest: "https://full-node.testnet-1.coreum.dev:1317",
  bip44: { coinType: 990 },
  bech32Config: {
    bech32PrefixAccAddr: "core",
    bech32PrefixAccPub: "corepub",
    bech32PrefixValAddr: "corevaloper",
    bech32PrefixValPub: "corevaloperpub",
    bech32PrefixConsAddr: "corevalcons",
    bech32PrefixConsPub: "corevalconspub",
  },
  currencies: [
    {
      coinDenom: "COREUM",
      coinMinimalDenom: "ucore",
      coinDecimals: 6,
      coinGeckoId: "coreum",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "COREUM",
      coinMinimalDenom: "ucore",
      coinDecimals: 6,
    },
  ],
  stakeCurrency: {
    coinDenom: "COREUM",
    coinMinimalDenom: "ucore",
    coinDecimals: 6,
  },
};

const Demo = () => {
  const { connect, openView, status, address } = useChain("coreum-testnet-1");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">SoloPass Demo</h1>
      {status === "Connected" ? (
        <div>
          <p className="mb-2">✅ Connected:</p>
          <p className="font-mono">{address}</p>
        </div>
      ) : (
        <button
          onClick={connect}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Connect Keplr
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ChainProvider
      chains={[coreumChain]}
      assetLists={[]}
      wallets={keplrWallets}
    >
      <Demo />
    </ChainProvider>
  );
}

