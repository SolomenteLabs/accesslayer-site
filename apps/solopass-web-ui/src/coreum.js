export const chains = [
  {
    chain_name: "coreum",
    chain_id: "coreum-testnet-1",
    apis: {
      rpc: [{ address: "https://full-node.testnet-1.coreum.dev:26657", provider: "coreum" }],
      rest: [{ address: "https://full-node.testnet-1.coreum.dev:1317", provider: "coreum" }],
    },
    pretty_name: "Coreum",
    status: "active",
  }
];

export const assets = [
  {
    chain_name: "coreum",
    assets: [
      {
        description: "Coreum native token",
        base: "ucore",
        denom_units: [
          {
            denom: "ucore",
            exponent: 0
          },
          {
            denom: "COREUM",
            exponent: 6
          }
        ],
        name: "Coreum",
        symbol: "COREUM",
        display: "COREUM",
      }
    ]
  }
];
