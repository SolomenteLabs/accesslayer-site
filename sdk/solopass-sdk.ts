export async function mint(): Promise<string> {
  console.log("mint() called");
  return "core1debugaddress";
}

export async function check(address: string): Promise<{ valid: boolean; expiresAt: string }> {
  console.log("check() called with", address);
  return {
    valid: true,
    expiresAt: new Date(Date.now() + 7 * 86400000).toISOString()
  };
}

