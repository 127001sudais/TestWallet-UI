const bip39 = require("bip39");

export const parseSecretRecoveryPhrase = (seedPhrase) => {
  // first, normalize the seed phrase
  const normalizedPhrase =
    (seedPhrase || "").trim().toLowerCase().match(/\w+/gu)?.join(" ") || "";

  // then, validate it using bip39
  const isValid = bip39.validateMnemonic(normalizedPhrase);

  if (isValid) {
    return { valid: true, phrase: normalizedPhrase };
  } else {
    return { valid: false, error: "Invalid seed phrase" };
  }
};
