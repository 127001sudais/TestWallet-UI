import React, { useEffect, useState } from "react";
import { generateMnemonic } from "bip39";

function RecoveryPhrase({ nextStep, prevStep }) {
  const [mnemonic, setMnemonic] = useState("");

  useEffect(() => {
    const newMnemonic = generateMnemonic();
    setMnemonic(newMnemonic);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ mnemonic });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Your recovery phrase is: {mnemonic}</p>
        <button type="submit">Next</button>
        <button type="button" onClick={prevStep}>
          Back
        </button>
      </form>
    </div>
  );
}

export default RecoveryPhrase;
