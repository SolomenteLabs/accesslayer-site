let walletConnected = false;
let hasSoloPass = false;

document.getElementById("connect").onclick = () => {
  walletConnected = true;
  document.getElementById("mint").disabled = false;
  alert("Wallet connected!");
};

document.getElementById("mint").onclick = () => {
  if (!walletConnected) return;
  hasSoloPass = true;
  document.getElementById("gate").classList.remove("hidden");
};
