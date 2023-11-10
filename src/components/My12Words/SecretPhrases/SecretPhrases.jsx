import React, { useState } from "react";

// icon
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

function SecretPhrases() {
  const [buttonText, setButtonText] = useState("Copy to clipboard");

  //   COPY TO CLIPBOARD BUTTON FUNCTION
  //   const copyToClipboard = () => {
  //     navigator.clipboard
  //       .writeText(TestSecretPhase)
  //       .then(() => setButtonText("Copied"))
  //       .catch(() => setButtonText("Failed to copy text"));
  //   };
  const TestSecretPhase = [
    "hello",
    "world",
    "dolar",
    "dance",
    "sea ",
    "keyboard ",
    "steering ",
    "food",
    "nine ",
    "blackshark",
    "camera",
    "game",
  ];
  return (
    <>
      {" "}
      <div className=" mt-3 pb-3">
        {TestSecretPhase.map((word, i) => (
          <p className=" text-xs flex  flex-col ml-16 " key={word}>
            {i + 1}. {word}
          </p>
        ))}
      </div>
      {/* COPY TO CLIPBOARD BUTTON  */}
      {/* <button
        onClick={copyToClipboard}
        className="border rounded-lg w-40 active:bg-gray-300 mt-2"
      >
        {buttonText}
      </button> */}
    </>
  );
}

export default SecretPhrases;
