
import React from 'react'
import { ChainProvider } from '@cosmos-kit/react'
import { wallets as keplrWallets } from '@cosmos-kit/keplr'
import { chains } from 'chain-registry'
import { SignerOptions } from '@cosmos-kit/core'

import { useChain } from '@cosmos-kit/react-lite'

const chainName = 'coreum'

const demoChains = [
  {
    chain_name: 'coreum',
    chain_id: 'coreum-mainnet-1',
    apis: {
      rpc: [{ address: 'https://full-node.mainnet-1.coreum.dev:26657' }],
      rest: [{ address: 'https://rest.mainnet-1.coreum.dev' }],
    },
  },
]

function MintingUI() {
  const { connect, disconnect, openView, status, address, username } = useChain(chainName)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold">SoloPass Minting</h1>
      {status !== 'Connected' ? (
        <button
          onClick={connect}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <div className="text-gray-700">Connected as: {address}</div>
          <button
            onClick={() => alert('Minting 30-day SoloPass (not implemented)')}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Mint 30-Day SoloPass
          </button>
          <button
            onClick={() => alert('Minting 365-day SoloPass (not implemented)')}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Mint 365-Day SoloPass
          </button>
          <button
            onClick={disconnect}
            className="text-red-500 underline text-sm"
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
    <ChainProvider
      chains={demoChains}
      assetLists={[]}
      wallets={keplrWallets}
      signerOptions={{} as SignerOptions}
      chainName={chainName}
    >
      <MintingUI />
    </ChainProvider>
  )
}
