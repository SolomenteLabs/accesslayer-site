import React, { useEffect, useState } from "react";
import { chains, assets } from "chain-registry";
import { ChainProvider, useChain } from "@cosmos-kit/react";
import { keplrExtensionInfo } from "@cosmos-kit/keplr";

const coreumChain = chains.find(c => c.chain_name === "coreum-testnet");

function MintButton() {
  const { connect, disconnect, status, address, getSigningStargateClient } = useChain("coreum-testnet");
  const [txHash, setTxHash] = useState(null);

  const mint = async () => {
    try {
      const client = await getSigningStargateClient();
      const fee = {
        amount: [{ denom: "utestcore", amount: "5000" }],
        gas: "200000",
      };

      const msg = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: address,
          toAddress: address,
          amount: [{ denom: "utestcore", amount: "1" }],
        },
      };

      const result = await client.signAndBroadcast(address, [msg], fee);
      setTxHash(result.transactionHash);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {status === "Connected" ? (
        <>
          <p>Wallet: {address}</p>
          <button onClick={mint} style={styles.button}>🔥 Mint Token</button>
          {txHash && <p>✅ TX Hash: {txHash}</p>}
          <button onClick={disconnect} style={styles.secondary}>Disconnect</button>
        </>
      ) : (
        <button onClick={connect} style={styles.button}>🔓 Connect Wallet</button>
      )}
    </div>
  );
}

const styles = {
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    cursor: "pointer",
    marginBottom: "1rem"
  },
  secondary: {
    ...this.button,
    backgroundColor: "#ccc",
    color: "#000"
  }
};

function App() {
  return (
    <ChainProvider
      chains={[coreumChain]}
      assetLists={[assets.find(a => a.chain_name === "coreum-testnet")]}
      wallets={[keplrExtensionInfo]}
      walletConnectOptions={{ signClient: { projectId: "example", relayUrl: "wss://relay.walletconnect.org", metadata: {} } }}
    >
      <div style={{ textAlign: "center", padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>🚀 SoloPass v5 Demo</h1>
        <p>Live minting via Coreum testnet</p>
        <MintButton />
      </div>
    </ChainProvider>
  );
}

export default App;
