export async function check(address: string): Promise<{ valid: boolean; expiresAt: string }> {
  return {
    valid: address.startsWith("core1"),
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
  };
}

export async function mint(): Promise<string> {
  console.log("Minting a SoloPass...");
  return "mock-core1-address-xyz";
}

