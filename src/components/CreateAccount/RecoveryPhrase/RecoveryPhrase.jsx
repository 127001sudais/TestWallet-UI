import React, { useEffect, useState } from "react";
import { generateMnemonic } from "bip39";

// header
import Header from "../../Header/Header";

//
import Notice from "../../Notice/Notice";

function RecoveryPhrase({ nextStep, prevStep }) {
  const [mnemonic, setMnemonic] = useState("");

  const text1 =
    "If your device is lost or broken these words recover your account on a different device";
  const text2 =
    "If anyone sees your 12 words create a new account and move your funds immediately";
  const text3 = "Record in secret, offline in order:";

  useEffect(() => {
    const newMnemonic = generateMnemonic();
    setMnemonic(newMnemonic);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep({ mnemonic });
  };

  const words = mnemonic.split(" ");
  return (
    <>
      <Header />
      <Notice text={text1} />
      <Notice text={text2} />
      <Notice text={text3} />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <p>Your recovery phrase is:</p>

          {/* */}
          <div className="flex flex-col justify-center">
            {words.map((word, i) => (
              <div key={i} className="m-1 p-1 border rounded">
                <span className="font-semibold">{i + 1}. </span>
                {word}
              </div>
            ))}
          </div>

          {/* button begins here */}
          <div className="flex mt-2 font-semibold justify-between w-full md:w-1/2 lg:w-1/3">
            {/* previous button begins here */}
            <button
              className="bg-gray-200 px-2 rounded-xl  hover:bg-gray-400"
              type="button"
              onClick={prevStep}
            >
              Back
            </button>
            {/* previous button ends here */}

            {/* next button begins here */}
            <button
              className="bg-gray-200 px-2 rounded-xl hover:bg-gray-400"
              type="submit"
            >
              Next
            </button>
            {/* next button ends here */}
          </div>
          {/* button ends here */}
        </div>
      </form>
    </>
  );
}

export default RecoveryPhrase;
